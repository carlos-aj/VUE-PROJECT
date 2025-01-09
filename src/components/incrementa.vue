<script setup>
    import { ref } from 'vue';

    const props = defineProps(['valorInicial'])
    const emit = defineEmits(['avisoDecena'])
    
    var count = ref(props.valorInicial);

    function incrementaVariable(){
        count.value++

        if(count.value == 10){
            emit('avisoDecena');
        }
    }

</script>

<template>
    <button @click="incrementaVariable">incrementa</button>
    {{ count }}
</template>

<style scoped>
</style>
