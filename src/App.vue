<template>
  <div class="mx-48 my-10 text-gray-300">
    <div class=" grid grid-cols-5 gap-5 text-center">
      <span>NOM</span>
      <span>DATE</span>
      <span>DEPART</span>
      <span>FIN</span>
      <span>TEMPS</span>
    </div>
    <hr class="w-full h-1 mx-auto border-0 rounded md:mt-4 bg-gray-300">
    <rush-component v-for="rush in this.rushes" :key="rush.id" :rush="rush"></rush-component>
    <div class=" py-2 bg-white rounded-md text-center hover:bg-opacity-5 bg-opacity-10 cursor-pointer" @click="offset">
      <span>Voir Plus </span><font-awesome-icon icon="fa-solid fa-arrow-down"></font-awesome-icon>
    </div>
  </div>
</template>

<script>
import RushComponent from "@/components/rush/rush.vue";

export default {
  name: 'App',
  data: () => ({
    rushes: []
  }),
  components: {
    RushComponent,
  },
  methods: {
    offset() {
      for (let i = 0; i < 10; i++) {
        this.rushes.push(
            {
              _id : "94fz84sfdds464hyu",
              id: 0,
              overWorldSeed: '-8386046011290383263',
              netherSeed: '-8386046011290383263',
              endSeed: '-8386046011290383263',
              startTime: '08:00:13',
              endTime: '12:00:14',
              date: '16-01-2023',
              events: [
                { commande: 'op NuRoZ', time: '08:03:25', typeEvent: 'commande' },
                {
                  commande: '/say p',
                  playerName: 'NuRoZ',
                  playerUUID: '9a940e67-067d-4e72-82e8-21b391004a1e',
                  time: '08:04:29',
                  typeEvent: 'commande'
                },
                {
                  playerName: 'NuRoZ',
                  playerUUID: '9a940e67-067d-4e72-82e8-21b391004a1e',
                  time: '08:05:25',
                  typeEvent: 'playerLeave'
                },
                {
                  playerName: 'NuRoZ',
                  playerUUID: '9a940e67-067d-4e72-82e8-21b391004a1e',
                  time: '08:10:27',
                  typeEvent: 'playerJoin'
                },
                {
                  succes: 'findNetherFortresse',
                  playerName: 'NuRoZ',
                  playerUUID: '9a940e67-067d-4e72-82e8-21b391004a1e',
                  time: '09:52:44',
                  typeEvent: 'succes'
                }
              ]
            }
        )
      }
    }
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.rushes.push(
          {
            _id : "94fz84sfdds464hyu",
            id: 0,
            overWorldSeed: '-8386046011290383263',
            netherSeed: '-8386046011290383263',
            endSeed: '-8386046011290383263',
            startTime: '08:00:13',
            endTime: '12:00:14',
            date: '16-01-2023',
            events: [
              { commande: 'op NuRoZ', time: '08:03:25', typeEvent: 'commande' },
              {
                commande: '/say p',
                playerName: 'NuRoZ',
                playerUUID: '9a940e67-067d-4e72-82e8-21b391004a1e',
                time: '08:04:29',
                typeEvent: 'commande'
              },
              {
                playerName: 'NuRoZ',
                playerUUID: '9a940e67-067d-4e72-82e8-21b391004a1e',
                time: '08:05:25',
                typeEvent: 'playerLeave'
              },
              {
                playerName: 'NuRoZ',
                playerUUID: '9a940e67-067d-4e72-82e8-21b391004a1e',
                time: '08:10:27',
                typeEvent: 'playerJoin'
              },
              {
                succes: 'findNetherFortresse',
                playerName: 'NuRoZ',
                playerUUID: '9a940e67-067d-4e72-82e8-21b391004a1e',
                time: '09:52:44',
                typeEvent: 'succes'
              }
            ]
          }
      )
    }
  },
}
</script>

<style>
</style>
