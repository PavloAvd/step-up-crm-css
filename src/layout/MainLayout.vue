<template>
    <div class="">
      <div>
        <the-navbar class="" />
      </div>
      <div class="">
        <the-sidebar />
      </div>
      <div>
        <router-view  class="contentArea"/>
      </div>

    </div>

</template>

<script setup>
import TheNavbar from "@/components/TheNavbar";
import TheSidebar from "@/components/TheSidebar";
import { computed } from "vue";
import {useStore } from 'vuex'

const store = useStore()
const studentBar = computed(() => store.state.studentBar)

</script>


