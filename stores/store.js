import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { 
      currentDay: '',
      userID: ''
   }
  },
  actions: {
    updateDay(val) {
      this.currentDay = val
    },
    updateUser(val) {
      this.userID = val
    },
  },
})