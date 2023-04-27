
<template>
  <div class="px-10 lg:flex lg:h-full lg:flex-col">
    <header class="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
      <h1 class="text-base font-semibold leading-6 text-gray-900">
        <time datetime="2022-01">{{ months[currentMonth-1] }} {{ currentYear }}</time>
      </h1>
      <div class="flex items-center">
        <div class="flex items-center">
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
          <button @click="$emit('add'); store.updateDay(day) " v-for="day in dates" :key="day.value" type="button" :class="[day.split('-').slice(-4).reverse().pop().replace(/^0/, '') == currentMonth ? 'bg-white' : 'bg-gray-100 pointer-events-none', 'flex h-auto flex-col px-3 py-2 hover:bg-gray-100']"> 
              <time :datetime="day" :class="[day == currentDate && 'flex h-6 w-6 items-center justify-center rounded-full bg-orange-400', 'ml-auto']">{{ day.split('-').slice(-2).reverse().pop().replace(/^0/, '') }}</time>  <!--  -->

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

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let date = new Date()
let currentDay = date.toLocaleString("default", {day: "2-digit"})//.padStart(2, '0');
let currentMonth = ref(date.toLocaleString("default", {month: "numeric"})) //.padStart(2,"0");
let currentYear = ref(date.toLocaleString("default", {year: "numeric"})) 
let currentDate = currentMonth.value + '-' + currentDay + '-' + currentYear.value

let dates = ref([])

const getDays = () => {
  // Clear Array
  dates.value.splice(0)

  // Init Arrays
  let datesCurrent = []
  let datesBefore = []
  let datesAfter = []


  // Get date baselines
  let firstDayOfMonth = new Date(currentYear.value, (parseInt(currentMonth.value) - 1), 1).getDay(),
  lastDateOfMonth = new Date(currentYear.value, currentMonth.value, 0).getDate(),
  lastDayOfMonth = new Date(currentYear.value, (parseInt(currentMonth.value) + 1), lastDateOfMonth).getDay(),
  lastDateOfLastMonth = new Date(currentYear.value, parseInt(currentMonth.value) + 1, 0).getDate()

  // Get our dates and days before/after current month
  for(let i = firstDayOfMonth; i > 0; i--)
  {
    datesBefore.push((parseInt(currentMonth.value) - 1) + '-' + (lastDateOfLastMonth - i + 1) + '-' + currentYear.value)
  }
  console.log(currentMonth.value)
  console.log(firstDayOfMonth)
  console.log((lastDateOfLastMonth))

  for(let i=1; i <= lastDateOfMonth; i++)
  {
    datesCurrent.push( (parseInt(currentMonth.value)) + '-' + (i) + '-' + currentYear.value)
  } 

  datesCurrent = datesBefore.concat(datesCurrent)
  let j = 0
  for(let i = lastDayOfMonth; i < 20; i++)
  {
    if(datesCurrent.length + j < 42)
    {
      datesAfter.push( (parseInt(currentMonth.value) + 1) + '-' + (i - lastDayOfMonth + 1) + '-' + currentYear.value)
    }
    console.log(j)
    j++
  }

  // Combine results
  dates.value = datesCurrent.concat(datesAfter)
  // console.log(dates.value)
}
getDays()

function addMonth(){
  currentMonth.value = (parseInt(currentMonth.value) + 1).toString()
  if(currentMonth.value > 11){
    currentMonth.value = 0
    currentYear.value = (parseInt(currentYear.value) + 1).toString()
  }
  getDays()
}

function subMonth(){
  currentMonth.value = (parseInt(currentMonth.value) - 1).toString()
  if(currentMonth.value < 0){
    currentMonth.value = 11
    currentYear.value = (parseInt(currentYear.value) - 1).toString()
  }
  getDays()
}

</script>