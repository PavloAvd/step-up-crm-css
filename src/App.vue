<template>
  <div class="bg"></div>
  <div class="">
    <component :is=" layout + '-layout' " v-if="layout"  />
  </div>
  
</template>

<script>
import {computed, onMounted} from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router'
import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";
import AdminLayout from "@/layout/AdminLayout";


export default {
  components: {MainLayout, AuthLayout,  AdminLayout},

  setup() {
    const route = useRoute()
    const store = useStore()
    onMounted(() => {
       store.dispatch('userState')
    })
    return{
      layout: computed(()=>route.meta.layout )
    }
  }
}

</script>

