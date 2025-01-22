<script setup>
import { ref, defineEmits } from 'vue';
import { useCurrentUser } from 'vuefire';

const inputContent = ref("");
const emit = defineEmits(['add-task']);

const user = useCurrentUser();

function enterTask(){
    if (inputContent.value !== "") {  
        emit('add-task', {
            concept: inputContent.value,
            priority: 2,
            time: Date.now(),
            done: false,
            user: user.value.uid,
        });
        inputContent.value = ""; 
    }
};
</script>

<template>
    <div>
        <input class="inputTask" type="text" placeholder="Task..." v-model="inputContent" @keyup.enter="enterTask">
    </div>
</template>

<style scoped>
    .inputTask{
        width: 915px;
        padding: 12px; 
        font-size: 16px;
        border: 1px solid #333;
        border-radius: 5px;
        outline: none;
        transition: all 0.3s ease;
        background-color: white;
        color: rgb(24, 24, 24);
    }

    
</style>
