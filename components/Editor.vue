<template>
  <div v-if="show" @click="$emit('close')" class="fixed inset-0 grid place-items-center bg-opacity-50 bg-black">
    <div @click.stop="" class="w-4/5 h-1/2 sm:w-1/2 sm:h-4/5">
      <div class="flex">
        <label for="message" class="ml-1 mr-auto block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Journal Entry</label>
        <label for="date-label" class="mr-1 ml-auto block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date: {{ store.currentDay }}</label>
      </div>
      <textarea v-model="textContent" id="message" class="block p-2.5 w-full h-full sm:h-4/5 text-sm text-gray-900 bg-gray-50 rounded-lg border  focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..." />
      <div class="flex">
        <button id="delete" type="button" @click="clearText()" class="ml-1 mr-auto rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Delete</button>
        <button id="create" type="button" @click="$emit('modalCondition')" class="mr-1 ml-auto justify-end rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Submit</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/store'

defineProps({
  show: Boolean,
})

const store = useCounterStore()
let textContent = ref('')

function clearText(){
  this.textContent = ''
}

</script>