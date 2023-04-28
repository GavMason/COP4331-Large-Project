<template>
  <div class="flex items-center relative min-h-screen h-full">
    <div class="mx-auto w-full sm:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <div
        class="animate__animated animate__fadeInDown animate__delay m-1 h-28 w-28 mx-auto"
      >
        <img
          src="~/assets/journal.png"
          alt="phonebook-icon"
          class="p-2 m-auto"
        />
      </div>
      <div
        class="animate__animated animate__fadeIn p-4 sm:rounded-sm sm:shadow-md sm:shadow-orange-300"
      >
        <div class="pb-4">
          <p class="text-center text-xl font-bold">Welcome!</p>
          <p class="text-center text-sm font-light mt-3">
            Please enter your username and password
          </p>
        </div>
        <form @submit.prevent="handleSubmit" class="" name="login">
          <div class="flex">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              <!-- <svg style="height: 1em; width: 1em">
                        <use xlink:href="#userIcon"></use>
                    </svg> -->
            </label>
            <input
              id="username"
              type="text"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
              required
            />
          </div>
          <div class="flex mt-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              <!-- <svg style="height: 1em; width: 1em;">
                      <use xlink:href="#userPass"></use>
                  </svg> -->
            </label>
            <input
              id="password"
              type="password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              required
            />
          </div>
          <div class="grid gap-3 mt-4">
            <span id="missingInfo"></span>
            <button
              type="submit"
              class="transition ease-in-out duration-300 hover:-translate-y-1 bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
            <p class="text-center">
              First time here?
              <a
                href="Register"
                class="underline cursor-pointer text-blue-500 hover:text-blue-700"
                >Click here to register</a
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function handleSubmit(event){
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log(username);
  console.log(password);
  // Send data to backend here!
  fetch('localhost:5000/api/SignIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if(response.ok){
      console.log('Login Successful');
    }
    else{
      console.log('Login Failed');
    }
  })
  .catch(error => {
    console.error('Error during login:', error);
  });
}
</script>


<style>
@import "/node_modules/animate.css";
</style>
