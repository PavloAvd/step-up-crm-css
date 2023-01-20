<template>
  <div class="" >
    <div class=" ">
      <img src="logo.png" class="w-56">
    </div>

    <form @submit.prevent="onSignUp" class="">
      <h1 class="">Зареєструватися</h1>
      <div class="">
        <label for="email" class="" >Email</label>
        <input :class="['pl-2  rounded-[10px] h-10', {'border-2 border-red-500' : eError}]" type="email" id="email" v-model="email">
        <small v-if="eError" class="text-red-500">{{eError}}</small>
      </div>
      <div class="">
        <label for="password" class="text-white">Пароль</label>
        <input :class="['pl-2  rounded-[10px] h-10', {'border-2 border-red-500' : pError}]" type="password" id="password" v-model="password">
        <small v-if="pError" class="text-red-500">{{pError}}</small>
      </div>
      <div class="">
        <label for="fullName" class="text-white">Прізвище та ім'я </label>
        <input type="text" id="fullName" class="pl-2  rounded-[10px] h-10" v-model="fullName">
        <small v-if="nError" class="text-red-500">{{nError}}</small>
      </div>
      <div class="">
        <label for="bDate" class="">Дата народження</label>
        <input type="date" id="bDate" class="pl-2  rounded-[10px] h-10" v-model="bDate">
        <small v-if="bError" class="text-red-500">{{bError}}</small>
      </div>
      <div class="">
        <label for="phone" class="">Номер телефону </label>
        <input type="tel" id="phone" placeholder="+380" class="pl-2 rounded-[10px] h-10" v-model="phone">
        <small v-if="phError" class="text-red-500">{{phError}}</small>
      </div>
      <div class="">
        <label for="zone" class="">Ваш Філіал</label>
        <select id="zone" class="" v-model="zone">
          <option>Калинова</option>
          <option>Тополя</option>
          <option>Перемога</option>
          <option>Парус</option>        </select>
      </div>
      <div class="">
        <label for="d-code" class="">Код танцівника</label>
        <input class="" type="password" id="d-code" v-model="dCode">
        <small v-if="dCodeError" class="">{{dCodeError}}</small>
      </div>
      <div class="">
        <app-button type="submit" class="" title="Підтвердити" :disabled="isSubmitting || isTooManyAttempts"></app-button>
        <app-button class=" " title="На головну" @click="router.push('/')"></app-button>
      </div>
    </form>
</div>
</template>

<script>
import {useLoginForm} from "@/use/login-form";
import {useSignUpForm} from "@/use/sign-up-form";
import AppButton from "@/components/ui/button/AppButton";
import {useRouter} from "vue-router";
export default {
 setup(){
   const router = useRouter()
   return {
     ...useSignUpForm(),
     router
   }
 },
  components: {AppButton}

}
</script>

<style scoped>

</style>
