<template>
  <div class="homeContainer">
    <div class="pagePart" >
      <h1>Вітаємо на освітньому танцювальному порталі колективу Step Up</h1>
    </div>
    <div>
      <h2>Фото з тренувань</h2>
      <div class="imgHomeList" >
        <img src="../assets/testjpg.jpg" alt="" class="imgHome">
        <img src="../assets/testjpg.jpg" alt="" class="imgHome">
        <img src="../assets/testjpg.jpg" alt="" class="imgHome">
      </div>
    </div>

    <div class="pagePart" >
      <div v-for="urls in store.getters['gallery/getHomePageVideo'] "  class="homePageVideoList">
        <video :src="urls" class="homePageVideo" controls></video>
     </div>
    </div>
    <div class="pagePart" >
      <h2>тут будуть останні відгуки від батьківта дітей</h2>
    </div>
    <div class="pagePart feedback" >
      <label for="feedback">Написати Ваші враження або побажання можна тут</label>
      <Input type="text" id="feedback"/>
      <AppButton title="Відправити"></AppButton>
    </div>
<!--    <carousel class=""/>-->
  </div>
</template>

<script setup>
import AppButton from '@/components/ui/button/AppButton.vue';
import Carousel from '@/components/Carousel'
import { useStore } from 'vuex';
import { onMounted } from 'vue';

const store = useStore()
onMounted( async () => {
    await store.dispatch('gallery/loadHomePageVideo')
})
// onMounted( async () => {
//   await store.dispatch('gallery/loadCarousel')
// })
</script>

<style scoped>

</style>
