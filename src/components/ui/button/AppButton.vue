<template>
  <button class="navButton"> {{title}}</button>
</template>

<script setup>
const props = defineProps({
  title: String,
  required: true
})
</script>

<style scoped>

</style>
