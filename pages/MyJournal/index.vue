<template>
  <div>
    <NavBar @add=" showModal = true "/>
    <Calendar @add="showModal = true" />
    <Editor v-if="showModal" :show="showModal" @close="showModal = false" />
  </div>
</template>

<script setup>
  
  let showModal = ref(false)
  
</script>
