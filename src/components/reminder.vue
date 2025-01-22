<script setup>
import Task from './task.vue';
import List from './list.vue';
import HeadComp from './headerComponent.vue';
import FootComp from './footerComponent.vue';
import Login from './login.vue';
import { useCollection, useFirestore, useCurrentUser } from 'vuefire';
import { collection, addDoc, orderBy, query, deleteDoc, doc, updateDoc, where } from 'firebase/firestore';

const db = useFirestore();

const user = useCurrentUser();

var taskList;

if(user.value.uid === "cZrPrsdkytdenenGxH1CQobUN8Z2"){
    taskList = useCollection(query(collection(db,'Recordatorios'),orderBy("priority")));
}else{
    taskList = useCollection(query(collection(db,'Recordatorios'),orderBy("priority"),where('user','==',user.value.uid)));
}

function addTask(newTask){
    addDoc(collection(db, "Recordatorios"), newTask).then((docRef)=>{
        console.log("Document written with ID: ", docRef.id);
    }).catch((error)=>{
        console.log("ERROR: " + error)
    });
};

function deleteAllTasks(){
    taskList.value.map((element) =>
        deleteDoc(doc(db, "Recordatorios", element.id))
    );
}
function deleteTask(i){
    deleteDoc(doc(db, "Recordatorios", i)); 
}

function taskChecked(index){
    const taskRef = doc(db, "Recordatorios", taskList.value[index].id);
    const currentDone = taskList.value[index].done; 
    updateDoc(taskRef, {done: !currentDone });
}

function changePriority(index, id) {
    const taskId = taskList.value[index].id;
    const taskRef = doc(db, "Recordatorios", taskId);
    const newPriority = id;
    updateDoc(taskRef, { priority: newPriority })
}

</script>

<template>
    <Login></Login>
    <HeadComp></HeadComp>
        <div id="app">
            <Task @add-task="addTask"></Task>
            <List :tasks="taskList" @deleteAll-done="deleteAllTasks" @delete-done="deleteTask" @taskChecked-done="taskChecked" @completedTaskCount-done="completedTasksCount" @changePriority-done="changePriority"></List>
        </div>
    <FootComp></FootComp>
</template>

<style>
body{
    background-color: rgb(24, 24, 24);
    color: white;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
