<script setup>
import { ref, defineEmits } from 'vue';

const inputContent = ref("");
const emit = defineEmits(['add-task']);

function enterTask(){
    if (inputContent.value !== "") {  
        emit('add-task', {
            concept: inputContent.value,
            priority: "normal",
            time: Date.now(),
            done: false
        });
        inputContent.value = ""; 
    }
};
</script>

<template>
    <div>
        <input type="text" placeholder="Task..." v-model="inputContent" @keyup.enter="enterTask">
    </div>
</template>

<style scoped>
</style>
