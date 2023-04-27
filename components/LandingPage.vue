<template>
  <div
    class="flex items-center relative min-h-screen h-full bg-gradient-to-r from-orange-100 via-white to-white"
  >
    <div class="grid lg:grid-cols-6 gap-2">
      <div
        class="hidden lg:block col-start-1 col-span-3 animate-bounce mx-auto m-1"
      >
        <img
          class="lg:w-48 lg:h-48"
          src="../assets/journal.png"
          alt="journal-icon"
        />
      </div>
      <div class="lg:col-start-4 lg:col-span-2">
        <h1 class="text-left text-5xl font-extrabold text-orange-950 m-5">
          Welcome!
        </h1>
        <p
          class="m-5 text-left sm:text-3xl md:text-3xl lg:text-2xl font-light text-orange-950"
        >
          Journaling can help in the management of personal adversity and
          change, and emphasize important patterns and growth in life. This app
          intends to help your journaling needs by being with you on the go,
          allowing you to store your daily insights.
        </p>
        <div class="m-5 flex space-x-4">
          <a href="User/SignIn">
            <button
              type="submit"
              class="transition ease-in-out duration-300 hover:-translate-y-1 bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
          </a>
          <a href="User/Register">
            <button
              type="submit"
              class="transition ease-in-out duration-300 hover:-translate-y-1 bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
