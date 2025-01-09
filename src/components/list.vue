<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({ tasks: Array });
const emit = defineEmits(['deleteAll-done', 'delete-done']);

function deleteAllTasks() {
    emit('deleteAll-done');
}

function deleteTask(i) {
    emit('delete-done', i);
}

function taskChecked(index) {
    props.tasks[index].done = !props.tasks[index].done;
}

function completedTasksCount() {
    return props.tasks.filter(task => task.done).length; 
}

function changePriority(index, id){
    props.tasks[index].priority = id;
    console.log(props.tasks[index].priority)
}
</script>

<template>
    <div>
        <p>
            <i class="fa-solid fa-chart-simple"></i>
            {{ tasks.length - completedTasksCount() }} to-dos from {{ tasks.length }} |
        </p>
        <p @click="deleteAllTasks">
            <i class="fa-solid fa-x"></i>Delete all tasks
        </p>
    </div>

    <div id="list">
        <div v-for="(task, index) in tasks" :key="index">
            <input type="checkbox" class="checkbox" :checked="task.done" @click="taskChecked(index)">
            <h2>{{ task.concept }}</h2>
            <div id="data">
                <div id="priority">
                    <h3>Priority:</h3>
                    <div id="low" @click="changePriority(index, 'low')"><i class="fa-solid fa-angle-down"></i>Low</div>
                    <div id="normal" @click="changePriority(index, 'normal')">Normal</div>
                    <div id="high" @click="changePriority(index, 'high')"><i class="fa-solid fa-angle-up"></i>High</div>
                </div>
                <h3><i class="fa-regular fa-clock"></i> Add {{  Math.floor((Date.now() - task.time) / 60000) }} minutes ago</h3>
            </div>
            <div @click="deleteTask(index)"><i class="fa-solid fa-trash"></i></div>
        </div>
    </div>
</template>

<style scoped>
</style>
