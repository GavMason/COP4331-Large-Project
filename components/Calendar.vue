
<template>
  <div class="px-10 lg:flex lg:h-full lg:flex-col">
    <header class="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
      <h1 class="text-base font-semibold leading-6 text-gray-900">
        <time datetime="2022-01">January 2022</time>
      </h1>
      <div class="flex items-center">
        <div class="md:ml-4 md:flex md:items-center">
          <button type="button" class="ml-6 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Do Something</button>
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
        <div class="isolate grid w-full h-[75vh] grid-cols-7 grid-rows-6 gap-px">
          <button @click="$emit('add'); store.updateDay(day) " v-for="day in days" :key="day.date" type="button" :class="[day.isCurrentMonth ? 'bg-white' : 'bg-gray-50', (day.isSelected || day.isToday) && 'font-semibold', day.isSelected && 'text-white', !day.isSelected && day.isToday && 'text-blue-600', !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900', !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-500', 'flex h-auto flex-col px-3 py-2 hover:bg-gray-100 focus:z-10']">
              <time :datetime="day.date" :class="[day.isSelected && 'flex h-6 w-6 items-center justify-center rounded-full', day.isSelected && day.isToday && 'bg-blue-600', day.isSelected && !day.isToday && 'bg-gray-900', 'ml-auto']">{{ day.date.split('-').pop().replace(/^0/, '') }}</time>
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

const days = [
  { date: '2021-12-27'},
  { date: '2021-12-28'},
  { date: '2021-12-29'},
  { date: '2021-12-30'},
  { date: '2021-12-31'},
  { date: '2022-01-01', isCurrentMonth: true},
  { date: '2022-01-02', isCurrentMonth: true},
  {
    date: '2022-01-03',
    isCurrentMonth: true,
  },
  { date: '2022-01-04', isCurrentMonth: true},
  { date: '2022-01-05', isCurrentMonth: true},
  { date: '2022-01-06', isCurrentMonth: true},
  {
    date: '2022-01-07',
    isCurrentMonth: true,
  },
  { date: '2022-01-08', isCurrentMonth: true},
  { date: '2022-01-09', isCurrentMonth: true},
  { date: '2022-01-10', isCurrentMonth: true},
  { date: '2022-01-11', isCurrentMonth: true},
  {
    date: '2022-01-12',
    isCurrentMonth: true,
    isToday: true,
  },
  { date: '2022-01-13', isCurrentMonth: true},
  { date: '2022-01-14', isCurrentMonth: true},
  { date: '2022-01-15', isCurrentMonth: true},
  { date: '2022-01-16', isCurrentMonth: true},
  { date: '2022-01-17', isCurrentMonth: true},
  { date: '2022-01-18', isCurrentMonth: true},
  { date: '2022-01-19', isCurrentMonth: true},
  { date: '2022-01-20', isCurrentMonth: true},
  { date: '2022-01-21', isCurrentMonth: true},
  {
    date: '2022-01-22',
    isCurrentMonth: true,
    isSelected: true,
  },
  { date: '2022-01-23', isCurrentMonth: true},
  { date: '2022-01-24', isCurrentMonth: true},
  { date: '2022-01-25', isCurrentMonth: true},
  { date: '2022-01-26', isCurrentMonth: true},
  { date: '2022-01-27', isCurrentMonth: true},
  { date: '2022-01-28', isCurrentMonth: true},
  { date: '2022-01-29', isCurrentMonth: true},
  { date: '2022-01-30', isCurrentMonth: true},
  { date: '2022-01-31', isCurrentMonth: true},
  { date: '2022-02-01'},
  { date: '2022-02-02'},
  { date: '2022-02-03'},
  {
    date: '2022-02-04',
  },
  { date: '2022-02-05'},
  { date: '2022-02-06'},
]
const selectedDay = days.find((day) => day.isSelected)
</script>