import { defineStore } from 'pinia'

export const useDayStore = defineStore('day', {
  state: () => {
    return { 
      currentDay: '',
   }
  },
  actions: {
    updateDay(val) {
      this.currentDay = val
    },
  },
})