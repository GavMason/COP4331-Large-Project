<template>
<div >
  <NavBar />
  <Calendar @add=" showModal = true " />
  <Editor v-if="showModal" :show="showModal" @close="showModal=false"/>
</div>
</template>

<script setup>
import { useCounterStore } from '@/stores/store'


let showModal = ref(false)

const store = useCounterStore()

</script>