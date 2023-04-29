<template>
  <div>
    <NavBar @add=" showModal = true "/>
    <Calendar @add="showModal = true" />
    <Editor v-if="showModal" :show="showModal" @close="showModal = false" @submit="submitDiaryEntry"/>
  </div>
</template>

<script setup>
  
  let showModal = ref(false)
  
  
// const submitDiaryEntry = async (diaryEntry) => {
//   try {
//     const response = await fetch('http://167.172.132.244/api/diary', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(diaryEntry)
//     })
    
//     const data = await response.json()
//     console.log(data)
    
//     showModal.value = false
//   } catch (error) {
//     console.error(error)
//   }
// }
</script>
