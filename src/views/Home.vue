<template>
  <header>
    <div class="container">
      <div class="homeTitle">
        <h2>Вітаємо на освітньому танцювальному порталі колективу</h2>
        <h1>STEP UP SHTURM</h1>
      </div>
    </div>
  </header>
  <section>
    <div class="container">
      <h2>Фото з тренувань</h2>
        <div class="photoPart">
          <div  class="sliderListMobile">
            <div>
              <img 
                v-for="(item, index) in homePagePhotos"
                :key="index"
                :src="require(`@/assets/${item}`)"
                class="imgHome" 
                alt=""
              >
            </div>
          </div>
        </div>
    </div>
  </section>
  <section>
    <div class="container">
      <h2>Відео</h2> 
      <div class="sliderListMobile">  
        <iframe
          v-for="item in store.getters['gallery/getHomePageVideo']" 
          class="homePageVideo"    
          :src="item"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen  
        ></iframe>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
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
      <AppButton title="Залишити відгук" @click="openModal = true"/>
      <app-modal v-if="openModal" classModal="home-modal" @close="openModal = false">
        <div class="">
          <div class="feedback">
            <label for="feedback">Залишити відгук</label>
            <input type="text" id="feedback" class="input"/>
            <AppButton title="Відправити" @click="store.dispatch('gallery/loadHomePageVideo')"></AppButton>
          </div>
        </div>
      </app-modal>
    </div>
  </section>
  <footer>
    <div class="container">
      <div class="social-links">
        <p>Instagram</p>
        <p>Facebook</p>
        <p>YouTube</p>
      </div>
    </div>
  </footer>
<!--    <carousel class=""/>--> 
</template>

<script setup>
import AppButton from '@/components/ui/button/AppButton.vue';
import Carousel from '@/components/Carousel'
import { useStore } from 'vuex';
import { onMounted, ref, computed } from 'vue';
import AppModal from '@/components/AppModal.vue';

let openModal = ref(false)
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
