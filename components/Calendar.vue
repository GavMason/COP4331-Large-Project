
<template>
  <div class="px-10 lg:flex lg:h-full lg:flex-col">
    <header class="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
      <h1 class="text-base font-semibold leading-6 text-gray-900">
        <time datetime="2022-01">{{ months[currentMonth-1] }} {{ currentYear }}</time>
      </h1>
      <div class="flex items-center">
        <div class="flex items-center">
          <!-- <button type="button" class="ml-6 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Do Something</button> -->
          <button type="button" @click="subMonth()" class="h-4 w-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div class="px-3" />
          <button type="button" @click="addMonth()" class="h-4 w-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <div class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
      <div class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
        <div class="bg-white py-2">S<span class="sr-only sm:not-sr-only">un</span></div>
        <div class="bg-white py-2">M<span class="sr-only sm:not-sr-only">on</span></div>
        <div class="bg-white py-2">T<span class="sr-only sm:not-sr-only">ue</span></div>
        <div class="bg-white py-2">W<span class="sr-only sm:not-sr-only">ed</span></div>
        <div class="bg-white py-2">T<span class="sr-only sm:not-sr-only">hu</span></div>
        <div class="bg-white py-2">F<span class="sr-only sm:not-sr-only">ri</span></div>
        <div class="bg-white py-2">S<span class="sr-only sm:not-sr-only">at</span></div>
      </div>
      <div class="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
        <div class="grid w-full h-[75vh] grid-cols-7 grid-rows-6 gap-px">
          <button @click="$emit('add'); store.updateDay(day) " v-for="day in dates" :key="day" type="button" :class="[day.isCurrentMonth ? 'bg-white' : 'bg-gray-50', (day.isSelected || currentDate) && 'font-semibold', day.isSelected && 'text-white', !day.isSelected && currentDate && 'text-blue-600', !day.isSelected && day.isCurrentMonth && !currentDate && 'text-gray-900', !day.isSelected && !day.isCurrentMonth && !currentDate && 'text-gray-500', 'flex h-auto flex-col px-3 py-2 hover:bg-gray-100']"> 
              <time :datetime="day" :class="[day.isSelected && 'flex h-6 w-6 items-center justify-center rounded-full', day.isSelected && currentDate && 'bg-blue-600', day.isSelected && !currentDate && 'bg-gray-900', 'ml-auto']">{{ day.split('-').slice(-2).reverse().pop().replace(/^0/, '') }}</time> 

            <!-- <span class="sr-only">{{ day.events.length }} events</span>
            <span v-if="day.events.length > 0" class="-mx-0.5 mt-auto flex flex-wrap-reverse">
              <span v-for="event in day.events" :key="event.id" class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
            </span> -->

          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/store'

const store = useCounterStore()

const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"]

let date = new Date()
let currentDay = date.toLocaleString("default", {day: "2-digit"})//.padStart(2, '0');
let currentMonth = ref(date.toLocaleString("default", {month: "numeric"})) //.padStart(2,"0");
let currentYear = ref(date.toLocaleString("default", {year: "numeric"})) 
let currentDate = currentMonth + '-' + currentDay + '-' + currentYear


// const selectedDay = days.find((day) => day.isSelected)

// console.log(parseInt(currentMonth.value) + 1)

// console.log(getDays())
let dates = ref([])
let datesBefore = []
let datesAfter = []

const getDays = () => {
  dates.value.splice(0, dates.value.length)
  // let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  let lastDateOfMonth = new Date(currentYear.value, parseInt(currentMonth.value), 0).getDate()
  // let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay()
  // let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate()


  // for(let i = firstDayOfMonth; i > 0; i--)
  // {
  //   datesBefore.push(lastDateOfLastMonth - i + 1)
  // }
  // console.log(datesBefore)

  // console.log('lastDateofmonth', lastDateOfMonth)
  for(let i=0; i <=lastDateOfMonth-1; i++)
  {
    dates.value[i] = ( currentMonth.value + '-' + (i+1) + '-' + currentYear.value)
  } 
  console.log(dates.value)
  console.log(currentMonth.value)
  console.log(currentYear.value)
  // for(let i= lastDayOfMonth; i < 6; i++)
  // {
  //   datesAfter.push(i - lastDateOfMonth + 1)
  // }
  // // console.log(lastDay)
  // console.log(datesAfter)
}
getDays()

function addMonth(){
  currentMonth.value = (parseInt(currentMonth.value) + 1).toString()
  if(currentMonth.value > 12){
    currentMonth.value = 1
    currentYear.value = (parseInt(currentYear.value) + 1).toString()
  }
  getDays()
}

function subMonth(){
  currentMonth.value = (parseInt(currentMonth.value) - 1).toString()
  if(currentMonth.value < 1){
    currentMonth.value = 12
    currentYear.value = (parseInt(currentYear.value) - 1).toString()
  }
  getDays()
}

</script>