<template>
  <div class="homeContainer">
    <div class="header">
      <h2 class="">Вітаємо на освітньому танцювальному порталі колективу</h2>
      <h1 class="">STEP UP SHTURM</h1>
    </div>
    <div>
      <h2>Фото з тренувань</h2>
      <div class="sliderListMobile" >
        <div v-for="item in homePagePhotos">
          <img :src="require(`@/assets/${item}`)" class="imgHome" alt="">
        </div>
      </div>
    </div>

    <div class="pagePart">
      <div class="sliderListMobile">
        <div v-for="item in store.getters['gallery/getHomePageVideo']"  >
          <iframe
              class="homePageVideo"
            :src="item"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="sliderListMobile" >
      <div class="card">
        <span>{{ store.getters['feedbackList']  }}</span>
      </div>
      <div  v-for="(item, idx) in feedbacks" :key="idx">
        <div class="card">
          <span>{{ item.name }}</span>
          <span>{{ item.comment }}</span>
        </div>
      </div>
    </div>

    <div class="pagePart feedback">
      <label for="feedback">Залишити відгук</label>
      <input type="text" id="feedback" class="input"/>
      <AppButton title="Відправити" @click="store.dispatch('gallery/loadHomePageVideo')"></AppButton>
    </div>
<!--    <carousel class=""/>-->
  </div>
</template>

<script setup>
import AppButton from '@/components/ui/button/AppButton.vue';
import Carousel from '@/components/Carousel'
import { useStore } from 'vuex';
import { onMounted, ref, computed } from 'vue';

const feedbacks = [
  { name: 'Павло: ', comment : 'Найкраща хореографія тільки тут' },
  { name: 'Павло: ', comment : 'Найкраща хореографія тільки тут' },
  { name: 'Павло: ', comment : 'Найкраща хореографія тільки тут' },
]

const homePagePhotos = [
  'testjpg.jpg',
  'testjpg.jpg',
  'testjpg.jpg'
]

const homePageVideos = [
  'https://www.youtube.com/embed/fzEeuxOZl_k',
]

let imgLink = computed(img => {
  return require('@/assets/' + img)
})

const store = useStore()
// let imgLink = computed( ()=> {
//   return store.getters["gallery/hpiLink"]
// })
onMounted( async () => {
    await store.dispatch('gallery/loadHomePageVideo')
    await store.dispatch('message/loadFeedback')
})
// onMounted( async () => {
//   await store.dispatch('gallery/loadCarousel')
// })
</script>

<style scoped>

</style>
