<template>
  <div class="">
    <header class="flex justify-left justify-between bg-orange-300 p-1">
      <div>
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="dark:hover:bg-black-900 dark:hover:text-white hover:bg-yellow-800"
        >
          <svg viewBox="0 0 24 24" class="m-2 w-6 h-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
      <p class="text-center mx-auto my-auto pr-8 font-bold text-xl">My Journal</p>
    </header>
    <div
      class="transform absolute z-10 ease-in-out transition-all duration-300 flex flex-col justify-between top-0 h-screen bg-orange-300"
      :class="isOpen ? '-translate-x-0 w-64' : '-translate-x-full'"
    >
      <div>
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="w-full justify-end p-5 inline-flex"
        >
          <svg
            xmlns=" http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="3.0"
            stroke="currentColor"
            class="dark:hover:bg-black-900 dark:hover:text-white hover:bg-yellow-800 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div class="pb-7 flex justify-center">
          <a href="User/SignIn">
            <img
              class="w-20 h-20"
              src="../assets/journal.png"
              alt="journal-icon"
            />
          </a>
        </div>
        <button
          type="button"
          class="w-full flex justify-around p-6 border-dark dark:hover:bg-black-900 dark:hover:text-white hover:bg-yellow-800"
        >
          <p class="text-xl font-mono font-semibold">New Entry</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="m-0.5 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div>
        <a href="MyAccount">
          <button
            type="button"
            class="w-full flex justify-around p-6 border-dark dark:hover:bg-black-900 dark:hover:text-white hover:bg-yellow-800"
          >
            <p class="text-xl font-mono font-semibold">My Account</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="m-0.5 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
        </a>
        <a href="User/SignOut">
          <button
            type="button"
            class="w-full flex justify-around p-6 border-dark dark:hover:bg-black-900 dark:hover:text-white hover:bg-yellow-800"
          >
            <p class="text-xl font-mono font-semibold">Sign out</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="m-0.5 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>

  let isOpen = ref(false)
  console.log(isOpen.value)

</script>
