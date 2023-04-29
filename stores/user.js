import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { 
      userID: '',
   }
  },
  actions: {
    updateUser(val) {
      this.userID = val
      console.log(this.userID)
    },
  },
  persist: true,
})