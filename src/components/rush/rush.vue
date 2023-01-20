<template>
  <div class="relative  py-5 my-5 bg-white rounded-md text-center hover:bg-opacity-5 bg-opacity-10">
    <div class="grid grid-cols-5 gap-5">
      <span>Rush-{{rush.id + 1}}</span>
      <span>{{rush.date}}</span>
      <span>{{rush.startTime}}</span>
      <span>{{rush.endTime}}</span>
      <span>{{getTime()}}</span>
      <font-awesome-icon v-if="!modal" icon="fa-solid fa-caret-down" class="m-auto absolute right-5 inset-y-0 cursor-pointer" @click="toggleModal"></font-awesome-icon>
      <font-awesome-icon v-else icon="fa-solid fa-caret-up" class="m-auto absolute right-5 inset-y-0 cursor-pointer" @click="toggleModal"></font-awesome-icon>
    </div>
    <div v-if="modal" class="flex items-center justify-center flex-col">
      <div>
        <span>test</span>
      </div>
    </div>
  </div>

</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "rushComponent",
  components: {FontAwesomeIcon},
  props: ["rush"],
  data:() => ({
    modal:false,
  }),
  methods: {
    getTime() {
      let start = this.rush.startTime.split(":")
      let end = this.rush.endTime.split(":")

      let dateStart = new Date(0, 0, 0, start[2], start[1], start[0])
      let dateEnd = new Date(0, 0, 0, end[2], end[1], end[0])

      let differenceInMilliseconds = dateEnd.getTime() - dateStart.getTime();
      let seconds = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
      let minutes = Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
      let hours = Math.floor((differenceInMilliseconds % (1000 * 60)) / 1000);

      return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    },
    toggleModal() {
      this.modal = !this.modal
    }
  }
}
</script>

<style scoped>

</style>