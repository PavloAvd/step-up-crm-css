<template>
    <div class="container">
        <div :class="classModal">
            <span @click="$emit('close')">Закрити</span>
            <slot></slot>
        </div>
    </div>
</template>


<script setup>
import { defineProps, defineEmits } from 'vue';
const emits= defineEmits(['close'])
const props = defineProps({
    classModal: String
})

   

</script>