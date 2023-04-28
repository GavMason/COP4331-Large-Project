<template>
  <div>
    <NavBar />
    <Calendar @add="showModal = true" />
    <Editor v-if="showModal" :show="showModal" @close="showModal = false" @submit="submitDiaryEntry"/>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useCounterStore } from '@/stores/store'
  
  let showModal = ref(false)
  
  const store = useCounterStore()
  
const submitDiaryEntry = async (diaryEntry) => {
  try {
    const response = await fetch('/api/diary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(diaryEntry)
    })
    
    const data = await response.json()
    console.log(data)
    
    showModal.value = false
  } catch (error) {
    console.error(error)
  }
}
</script>
