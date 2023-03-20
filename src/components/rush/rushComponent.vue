<template>
  <div class="relative py-5 my-5 bg-white rounded-md text-center hover:bg-opacity-5 bg-opacity-10">
    <div class="grid grid-cols-6 gap-5">
      <span>Rush-{{rush.id}}</span>
      <span>{{rush.date}}</span>
      <span>{{rush.startTime}}</span>
      <span>{{rush.endTime}}</span>
      <span>{{getTime()}}</span>
      <div>
        <font-awesome-icon v-if="!modal" icon="fa-solid fa-caret-down" class="m-auto cursor-pointer" @click="toggleModal"></font-awesome-icon>
        <font-awesome-icon v-else icon="fa-solid fa-caret-up" class="m-auto cursor-pointer" @click="toggleModal"></font-awesome-icon>
      </div>
    </div>

    <div v-if="modal" class="flex flex-col items-center justify-center">
      <h2 class="my-4 text-2xl underline">Seeds :</h2>
      <div class="flex justify-around items-center text-center w-[40rem]">
        <span class="w-[10rem]"><strong>OverWorld</strong> : {{rushesDetails.value.overWorldSeed}}</span>
        <span class="w-[10rem]"><strong>Nether</strong> : {{rushesDetails.value.netherSeed}}</span>
        <span class="w-[10rem]"><strong>End</strong> : {{rushesDetails.value.endSeed}}</span>
      </div>
      <h2 class="my-4 text-2xl underline">Players :</h2>
      <div class="w-auto grid gap-10" :class="{'grid-cols-3' : rush.players.length >= 3, 'grid-cols-2' : rush.players.length === 2, 'grid-cols-1' : rush.players.length === 1}">
        <div  v-for="player of rush.players" :key="player" class="flex items-center justify-center bg-neutral-500 bg-opacity-50 w-[16rem] h-[4rem] rounded-md py-2 ">
          <img class="mr-4" width="32" height="32" :src="`https://mc-heads.net/avatar/${player.uuid}`" alt="">
          <span>{{ player.name }}</span>
        </div>
      </div>
      <div class="relative w-[40rem] h-auto overflow-hidden">
        <h2 class="my-4 text-2xl underline">Achievements :</h2>
        <div class="flex justify-around items-center text-center w-[40rem]">
          <span class="bg-neutral-800 text-gray-300 cursor-pointer w-32 h-8 bg-neutral-500 bg-opacity-50 hover:bg-opacity-30 rounded-md" @click="eventChange('success')">Succès</span>
          <span class="bg-neutral-800 text-gray-300 cursor-pointer w-32 h-8 bg-neutral-500 bg-opacity-50 hover:bg-opacity-30 rounded-md" @click="eventChange('commands')">Commandes</span>
          <span class="bg-neutral-800 text-gray-300 cursor-pointer w-32 h-8 bg-neutral-500 bg-opacity-50 hover:bg-opacity-30 rounded-md" @click="eventChange('others')">Autres Event</span>
        </div>
        <div class="relative overflow-y-scroll h-[16rem] flex items-center flex-col scroller">
          <div v-for="event of rushesDetails.value.events" :key="event.id" class="grid grid-cols-3 gap-5 bg-neutral-500 bg-opacity-50 rounded-md mt-8 py-4 w-[36rem]" v-show="typeEvent === 'success' && event.typeEvent === 'succes' && rushesDetails.value.events.length > 0">
            <span>{{event.playerName}}</span>
            <span>{{event.time}}</span>
            <span>{{event.typeEvent}}</span>
          </div>

          <div v-for="event of rushesDetails.value.events" :key="event.id" class="grid grid-cols-3 gap-5 bg-neutral-500 bg-opacity-50 rounded-md mt-8 py-4 w-[36rem]" v-show="typeEvent === 'commands' && event.typeEvent === 'commande' && rushesDetails.value.events.length > 0">
            <span>{{event.playerName === undefined ? 'Server' : event.playerName}}</span>
            <span>{{ event.time }}</span>
            <span>{{ event.commande }}</span>
          </div>

          <div v-for="event of rushesDetails.value.events" :key="event.id" class="grid grid-cols-3 gap-5 bg-neutral-500 bg-opacity-50 rounded-md mt-8 py-4 w-[36rem]" v-show="typeEvent === 'others' && event.typeEvent !== 'commande' && event.typeEvent !== 'succes' && rushesDetails.value.events.length > 0">
            <span>{{event.playerName === undefined ? 'Server' : event.playerName}}</span>
            <span>{{ event.time }}</span>
            <span>{{ event.typeEvent }}</span>
          </div>
        </div>


      </div>
    </div>
  </div>

</template>

<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {rushStore} from "../../../store.ts";
import {reactive, ref, defineProps} from "vue";

  const storeRush = rushStore()

  const props = defineProps({rush : Object})

  let modal = ref(false)
  const rushesDetails = reactive({})
  const typeEvent = ref('success')

  function getTime() {

      let start = props.rush.startTime
      let end = props.rush.endTime

      const differenceEnMs = new Date(`2022-03-12T${end}`).getTime() - new Date(`2022-03-12T${start}`).getTime();

      const heures = Math.floor(differenceEnMs / 3600000);
      const minutes = Math.floor((differenceEnMs % 3600000) / 60000);
      const secondes = Math.floor(((differenceEnMs % 3600000) % 60000) / 1000);

      return `${heures < 10 ? `0${heures}`: heures}:${minutes < 10 ? `0${minutes}`: minutes}:${secondes < 10 ? `0${secondes}`: secondes}`
    }

    async function toggleModal() {
      if(storeRush.rushesDetails.find((rush) => rush.id === props.rush.id) === undefined) {
        await storeRush.loadRush(props.rush.id)
      }

      console.log(storeRush.rushesDetails)
      rushesDetails.value = storeRush.rushesDetails.find((rush) => rush.id === props.rush.id)
      modal.value = !modal.value
    }
    function eventChange(eventType) {
      typeEvent.value = eventType
    }
</script>

<style scoped>
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 2px;
  background: rgba(0,0,0,0);
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: rgba(120, 113, 108, 0.5);
}
</style>