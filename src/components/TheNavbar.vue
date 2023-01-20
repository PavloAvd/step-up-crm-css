<template>
  <div class="navbar">

    <div class=" " >
      <img class="logo" src="../assets/logo.png" >
    </div>

    <div class="navLinks" >
      <div  class="linksInside">
        <app-button  title="Головна" @click="router.push('/')"></app-button>
        <app-button  title="Галерея" @click="router.push('/gallery')"></app-button>
        <app-button  title="Мерч" @click="router.push('/shop')"></app-button>
        <app-button  title="Контакти" @click="router.push('/contacts')"></app-button>
      </div>
      <div class="studentLinks">
        <app-button title="Музика" @click="router.push('/music')"></app-button>
        <app-button title="Бібліотека" @click="router.push('/theory')"></app-button>
        <app-button title="Журнал" @click="router.push('/journal')"></app-button>
        <app-button title="Tutorial" @click="router.push('/video-lessons')"></app-button>
        <app-button title="Events" @click="router.push('/events')"></app-button>
        <app-button title="Чат" @click="router.push('/chat')"></app-button>
      </div>
    </div>
    <div class="profileLinks">
      <app-button title="Авторизація" @click="router.push('/auth')"></app-button>
      <app-button title="Профіль" ></app-button>
    </div>

</div>
</template>

<script setup>
import AppButton from "@/components/ui/button/AppButton";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from 'vue'

const store = useStore()
const router = useRouter()
const openNav = ref(false)
const openSide = ref(false)
</script>

<style scoped>

</style>
