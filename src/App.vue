<script setup>
import { ref , onMounted } from 'vue';
import Task from './components/task.vue';
import List from './components/list.vue';
import HeadComp from './components/headerComponent.vue';
import FootComp from './components/footerComponent.vue';

var taskList = ref([]);

function addTask(newTask){
    taskList.value.push(newTask);
    saveLocalStorage(); 
};

function deleteAllTasks(){
    taskList.value = []; 
    saveLocalStorage(); 
};

function deleteTask(i){
    taskList.value.splice(i,1);
    saveLocalStorage(); 
}

function saveLocalStorage(){
    localStorage.setItem('List', JSON.stringify(taskList.value));
}

function loadLocalStorage(){
    const storedList = localStorage.getItem('List');
    taskList.value = storedList ? JSON.parse(storedList) : [];
}

onMounted(() => {
    loadLocalStorage();
});

</script>

<template>
    <HeadComp></HeadComp>
    <div id="app">
        <Task @add-task="addTask"></Task>
        <List :tasks="taskList" @deleteAll-done="deleteAllTasks" @delete-done="deleteTask"></List>
    </div>
    <FootComp></FootComp>
</template>

<style>
body{
    background-color: rgb(24, 24, 24);
    color: white;
}
</style>
