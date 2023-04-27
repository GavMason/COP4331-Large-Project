import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { currentDay: '' }
  },
  actions: {
    updateDay(val) {
      this.currentDay = val
      console.log(this.currentDay)
    },
  },
})