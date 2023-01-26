<template>
  <div class="homeContainer">
    <div class="header">
      <h2>Вітаємо на освітньому танцювальному порталі колективу</h2>
      <h1>STEP UP SHTURM</h1>  
    </div>
    <div>
      <h2>Фото з тренувань</h2>
      <div class="sliderListMobile" >
        <div v-for="(img) in homePagePhotos" :key="idx">
          <img :src="img" alt="">
        </div>
      </div>
    </div>

    <div class="pagePart">
      <!-- <div v-for="urls in store.getters['gallery/getHomePageVideo'] "  class="homePageVideoList">
        <video :src="urls" class="homePageVideo" controls ></video>
     </div> -->
     <div class="sliderListMobile">
      <video src="../assets/testVideo.mp4" controls class="homePageVideo"></video>
      <video src="../assets/testVideo.mp4" controls class="homePageVideo"></video>
      <video src="../assets/testVideo.mp4" controls class="homePageVideo"></video>
     </div>
    </div>
    <div class="sliderListMobile" >
      <div  v-for="item, idx in feedbacks" :key="idx">
        <div class="card">
          <span>{{ item.name }}</span>
          <span>{{ item.coment }}</span>
        </div>
      </div>
    </div>

      
    <div class="pagePart feedback">
      <label for="feedback">Залишити відгук</label>
      <Input type="text" id="feedback" class="input"/>
      <AppButton title="Відправити"></AppButton>
    </div>
<!--    <carousel class=""/>-->
  </div>
</template>

<script setup>
import AppButton from '@/components/ui/button/AppButton.vue';
import Carousel from '@/components/Carousel'
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';

const feedbacks = [
  { name: 'Павло: ', coment : 'Найкраща хореографія тільки тут' },
  { name: 'Павло: ', coment : 'Найкраща хореографія тільки тут' },
  { name: 'Павло: ', coment : 'Найкраща хореографія тільки тут' },
]  

const homePagePhotos = ref([
  '../assets/testjpg.jpg',
  '../assets/testjpg.jpg',
  '../assets/testjpg.jpg'
])


// const store = useStore()
// onMounted( async () => {
//     await store.dispatch('gallery/loadHomePageVideo')
// })
// onMounted( async () => {
//   await store.dispatch('gallery/loadCarousel')
// })
</script>

<style scoped>

</style>
