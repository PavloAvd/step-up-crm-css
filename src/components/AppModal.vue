<template>
    <div class="">
        <div :class="classModal">
            <app-button
            class="closeModalButton" 
            title="Закрити" 
            @click="$emit('close')"
            ></app-button>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import AppButton from './ui/button/AppButton.vue';
const emits= defineEmits(['close'])
const props = defineProps({
    classModal: String
})

</script>