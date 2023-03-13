<template>
  <div class="mx-48 my-10 text-gray-300">
    <div class="grid grid-cols-6 gap-5 text-center">
      <span>NOM</span>
      <span>DATE</span>
      <span>DEPART</span>
      <span>FIN</span>
      <span>TEMPS</span>
      <span>VOIR PLUS</span>
    </div>
    <hr class="w-full h-1 mx-auto border-0 rounded md:mt-4 bg-gray-300">
    <rush-component v-for="rush in storeRush.rushes" :key="rush.id" :rush="rush"></rush-component>
    <div class=" py-2 bg-white rounded-md text-center hover:bg-opacity-5 bg-opacity-10 cursor-pointer" @click="storeRush.loadRushes">
      <span>Voir Plus </span><font-awesome-icon icon="fa-solid fa-arrow-down"></font-awesome-icon>
    </div>
  </div>
</template>

<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import RushComponent from "@/components/rush/rushComponent.vue";
import {rushStore} from "../store.ts";

const storeRush = rushStore()
storeRush.loadRushes()

</script>

<style>
</style>
