<template>
  <div class="relative min-h-screen h-full flex items-center">
    <div class="mx-auto w-full sm:max-w-m lg:max-w-l xl:max-w-xl">
      <div
        class="animate__animated animate__fadeInDown animate__delay mb-4 w-24 h-24 mx-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-24 h-24"
          color="Red"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class="animate__animated animate__fadeIn animate__delay-1s p-4 sm:rounded-sm sm:shadow-md sm:shadow-orange-300"
      >
        <div class="pb-4">
          <p class="text-center text-2xl font-extrabold">Thank You!</p>
          <p class="text-center text-base font-light mt-3">
            You have been successfully signed out
          </p>
        </div>
        <div
          class="justify-center grid gap-3 mt-4 transition ease-in-out duration-300 hover:-translate-y-1 bg-red-400 hover:bg-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <a href="SignIn">
            <button type="submit" class="text-white text-center">
              Return to Main Page
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
