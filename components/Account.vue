<template>
  <div>
    <div class="relative min-h-screen h-full flex items-center">
      <div class="mx-auto w-full sm:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <div
          class="animate__animated animate__fadeIn animate__delay-1s p-4 sm:rounded-sm sm:shadow-md sm:shadow-orange-300"
        >
          <div class="p-4">
            <p class="text-center text-2xl font-extrabold">My Account</p>
          </div>
          <div class="grid m-2 gap-3 mb-6 md:grid-cols-2">
            <div>
              <label for="fname" class="block mb-2">First Name:</label>
              <input
                class="border w-full border-gray-300 text-gray-900 text-sm rounded-lg block p-2"
                type="text"
                id="fname"
                name="fname"
                value="first name"
                readonly
              />
            </div>
            <div>
              <label for="lname" class="block mb-2">Last Name:</label>
              <input
                class="border w-full border-gray-300 text-gray-900 text-sm rounded-lg block p-2"
                type="text"
                id="lname"
                name="lname"
                value="Last name"
                readonly
              />
            </div>
          </div>
          <div class="mb-6 m-2">
            <div>
              <label for="email" class="block mb-2">Email:</label>
              <input
                class="border w-full border-gray-300 text-gray-900 text-sm rounded-lg block p-2"
                type="text"
                id="email"
                name="email"
                value="example@example.com"
                readonly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>