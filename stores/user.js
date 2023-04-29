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
    },
  },
  persist: true,
})