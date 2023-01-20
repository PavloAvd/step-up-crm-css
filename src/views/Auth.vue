<template>
  <div class=" ">
    <div class="">
      <img src="logo.png" class="">
    </div>

    <form @submit.prevent="onSubmit" class="">
      <h1 class="">Авторизація</h1>
      <div class="">
        <label for="email" class="">Введіть email</label>
        <input
            class=""
           :class="['rounded-[10px] p-2 h-10', {'border-2 border-red-500' : eError}]"
            type="email" id="email"
            v-model="email"
            @blur="eBlur"
        >
        <small v-if="eError" class="">{{eError}}</small>
      </div>
      <div class="">
        <label for="password" class="">Введіть пароль</label>
        <input
            class=""
            :class="['rounded-[10px] h-10 p-2 ', {'border-2 border-red-500' : pError}]"
            type="password"
            id="password"
            v-model="password"
            @blur="pBlur"
        >
        <small v-if="pError" class="">{{pError}}</small>
      </div>
      <div class="">
        <app-button type="submit" class="" title="Увійти" :disabled="isSubmitting || isTooManyAttempts"></app-button>
        <app-button class=" mt-8" title="Реєстрація" @click="router.push('/sign-up')"></app-button>
      </div>
      <div class="">
        <app-button class=" h-10" title="На головну" @click="router.push('/')"></app-button>
      </div>
    </form>
  </div>

</template>

<script >
import {useLoginForm} from '@/use/login-form'
import AppButton from "@/components/ui/button/AppButton";
import {useRouter} from "vue-router";




export default {
  setup() {
  const router = useRouter()
    return {
      ...useLoginForm(),
      router
    }
  },
  components: {AppButton}
}
</script>


