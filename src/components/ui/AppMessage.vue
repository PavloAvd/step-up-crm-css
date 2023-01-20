<template>
  <div  v-if="message" class="">
    <p class=""> {{title}} </p>
    <h1> {{message.value}} </h1>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore()
    const TITLE_MAP = {
      primary: 'Все добре!',
      danger: 'Упс, сталася помилка',
      warning: 'Увага'
    }


    const message =computed(() => store.state.message.message)
    const title = computed(() => message.value ? TITLE_MAP[message.value.type] : null)
  return {
      message,
      title
  }
  }
}
</script>

<style scoped>

</style>
