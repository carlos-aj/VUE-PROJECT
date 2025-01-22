<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';

const props = defineProps({ tasks: Array });
const emit = defineEmits(['deleteAll-done', 'delete-done', 'taskChecked-done', 'changePriority-done']);
function deleteAllTasks() {
    emit('deleteAll-done');
}

function deleteTask(task) {
    emit('delete-done', task);
}

function taskChecked(index) {
    emit('taskChecked-done', index);
}

function changePriority(index, id) {
    props.tasks[index].priority = id; 
    emit('changePriority-done', index, id);
}

const completedTasksCount = computed(() => {
    return props.tasks.filter(task => task.done).length;
});

const taskTimes = ref(props.tasks.map(task => calculateTime(task.time)));

function calculateTime(taskTime) {
    const now = Date.now();
    const timeElapsed = now - taskTime;

    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));

    const timeString = [];
    if (days > 0) timeString.push(`${days} day${days > 1 ? 's' : ''}`);
    if (hours > 0) timeString.push(`${hours} hour${hours > 1 ? 's' : ''}`);
    if (minutes > 0) timeString.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);

    return timeString.join(', ') || '0 minutes';
}

function updateTaskTimes() {
    taskTimes.value = props.tasks.map(task => calculateTime(task.time));
}

onMounted(() => {
    updateTaskTimes(); 
    const interval = setInterval(updateTaskTimes, 60000); 

    onUnmounted(() => clearInterval(interval));
});

watch(() => props.tasks,() => {updateTaskTimes();},{ deep: true });
</script>


<template>
    <div class="to-doDelete">
        <p>
            <i class="fa-solid fa-chart-simple"></i>
            {{ props.tasks.length - completedTasksCount }} to-dos from {{ props.tasks.length }} 
        </p>
        <p class="delete" @click="deleteAllTasks">
            <i class="fa-solid fa-x"></i> Delete all tasks
        </p>
    </div>

    <div class="list">
        <TransitionGroup name="taskG" tag="div" class="task-group">
            <div class="task" v-for="(task, index) in props.tasks" :key="task.id">
                <div class="taskBox">
                    <input type="checkbox" class="Ccheckbox" :checked="task.done" @click="taskChecked(index)">
                    <h2 :class="{ completed: task.done }">{{ task.concept }}</h2>
                    <div @click="deleteTask(task.id)"><i class="fa-solid fa-trash"></i></div>
                </div>
                    <div class="data">
                        <div class="priority">
                            <h3>Priority:</h3>
                            <div class="low" :class="{ active: task.priority === 3 }" @click="changePriority(index, 3)">
                                <i class="fa-solid fa-angle-down"></i>Low
                            </div>
                            <div class="normal" :class="{ active: task.priority === 2 }" @click="changePriority(index, 2)">
                                Normal
                            </div>
                            <div class="high" :class="{ active: task.priority === 1 }" @click="changePriority(index, 1)">
                                <i class="fa-solid fa-angle-up"></i>High
                            </div>
                        </div>
                        <h3><i class="fa-regular fa-clock"></i> Added {{ taskTimes[index] }} ago</h3>
                    </div>
            </div>
    </TransitionGroup>
    </div>
</template>

<style scoped>

.taskG-move, 
.taskG-enter-active,
.taskG-leave-active {
  transition: all 0.5s ease;
}

.taskG-enter-from,
.taskG-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

body {
    background-color: #121212;
    color: white;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 0;
    padding: 0;
}

.to-doDelete {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #1e1e1e;
    border-bottom: 1px solid #333;
    width: 900px;
}

.to-doDelete p {
    margin: 0;
    font-size: 16px;
}

.delete {
    color: #f6e58d;
    cursor: pointer;
    font-weight: bold;
}

.delete:hover{
    color: #ffd700;
    text-shadow: 0 0 5px #ffd700;
}

.list {
    padding: 20px;
    display: flex;
    flex-direction: column;  /* Asegura que las tareas se alineen verticalmente */
    align-items: center;  /* Centra las tareas horizontalmente */
}

.task {
    background-color: #1e1e1e;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    width: 900px;  /* Define un ancho máximo para las tareas */
    box-sizing: border-box;  /* Incluye el padding y border en el ancho total */
}

.taskBox {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Asegura que los elementos estén distribuidos entre el espacio disponible */
    width: 100%;  
}

.Ccheckbox {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #fcdf4f; /* Amarillo oscuro */
    border-radius: 50%;
    background-color: #1e1e1e; /* Fondo blanco */
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
}

.Ccheckbox:checked {
    background-color: #fcdf4f; /* Amarillo oscuro */
    border-color: #f6e58d; /* Amarillo claro */
}

.Ccheckbox:checked::after {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
}

.taskBox h2 {
    margin-left: 10px;
    font-size: 18px;
    color: #fff;
    word-wrap: break-word;  /* Permite que las palabras largas se rompan y ajusten dentro del contenedor */
    overflow-wrap: break-word; /* Asegura que el texto se ajuste y no se desborde */
    hyphens: auto;  /* Permite que las palabras largas se dividan si es necesario */
    white-space: normal;  /* Permite que el texto ocupe más de una línea */
    width: 80%;  /* Hace que el texto ocupe todo el ancho disponible en el contenedor */
    box-sizing: border-box;  /* Incluye el padding y border en el ancho total */
    max-width: calc(100% - 40px);  /* Deja espacio para otros elementos, como el checkbox y el icono de eliminar */
    margin-right: 10px;  /* Da espacio para el icono de eliminar */
    flex-grow: 1; /* Permite que el texto ocupe todo el espacio disponible sin empujar el ícono de eliminar */
}

h2.completed {
    text-decoration: line-through;
    color: #888;  /* Puedes usar otro color si prefieres un tono más suave */
}

.taskBox div i {
    color: red;
    cursor: pointer;
    transition: color 0.3s;
}

.taskBox div i:hover {
    color: #ff6666;
}

.data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;
}

.priority {
    display: flex;
    align-items: center;
    gap: 10px;
}

.low, .normal, .high {
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 14px;
}

.low {
    color: white;
    background-color: #3b3a3a;
}

.normal {
    color: white;
    background-color: #3b3a3a;
}

.high {
    color: white;
    background-color: #3b3a3a;
}

.low.active {
    background-color: #4caf50;
    border: 2px solid #fff;
}

.normal.active {
    background-color: #2196f3;
    border: 2px solid #fff;
}

.high.active {
    background-color: #f44336;
    border: 2px solid #fff;
}

.data h3 {
    margin: 0;
    color: #aaa;
}

.data h3 i {
    margin-right: 5px;
}


</style>
