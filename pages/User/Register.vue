<template>
  <div class="relative min-h-screen h-full flex items-center">
    <div class="mx-auto w-full sm:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <div class="animate__animated animate__fadeInDown animate__delay m-1 h-28 w-28 mx-auto">
        <img
          src="~/assets/journal.png"
          alt="phonebook-icon"
          class="p-2 m-auto"
        />
      </div>
      <div class="animate__animated animate__fadeIn p-4 sm:rounded-sm sm:shadow-md sm:shadow-orange-300">
        <div class="pb-4">
          <p class="text-center text-xl font-bold">Welcome!</p>
          <p class="text-center text-sm font-light mt-3">
            Please enter your username and password
          </p>
        </div>
        <form @submit.prevent="handleSubmit" class="" name="login">
          <div class="flex flex-wrap">
            <!-- <label class="block text-gray-700 text-sm font-bold mb-2" for="username" ></label> -->
            <div class="w-full md:w-1/2 p-1">
              <input
                id="first-name"
                type="text"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="First Name"
                required
              />
            </div>
            <div class="w-full md:w-1/2 p-1">
              <input
                id="last-name"
                type="text"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div class="flex mt-4 p-1">
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
          <div class="flex mt-4 p-1">
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
          <div class="flex mt-4 p-1">
            <input
              id="confirm-password"
              type="password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div class="grid gap-3 mt-4 p-1">
            <span id="missingInfo"></span>
            <button
              type="submit"
              class="transition ease-in-out duration-300 hover:-translate-y-1
               bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded 
               focus:outline-none focus:shadow-outline"
              onclick="verifyLogin()"
            >
              Register
            </button>
            <p class="text-center">
              Already Registered?
              <a
                href="SignIn"
                class="underline cursor-pointer text-blue-500 hover:text-blue-700"
                >Click here to Sign In!</a
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const firstName = ref('')
const lastName = ref('')
const username = ref('')
const password = ref('')
const confirmPassword = ref('')

function handleSubmit(){
  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    username: username.value,
    password: password.value,
    confirmPassword: confirmPassword.value
  }

  if(password.value !== confirmPassword.value){
    console.log("Passwords do not match");
    // you can display an error message to the user here
    return;
  }

  if(!validatePassword(password.value)){
    //Do not send to backend just yet. Ask the user to enter a valid password
    console.log("Password does not meet validation requirements");
    return;
  }

  // Send data to backend here!
  fetch('/api/register',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if(response.ok){
      console.log("Registration Successful");
    }
    else{
      console.log("Registration Failed");
    }
  })
  .catch(error => {
    console.log('Error during registration:', error);
  });
}

function validatePassword(password){
  const regex = {
    specialChar: /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
    number: /\d/,
    uppercase: /[A-Z]/
  }

  if (!regex.specialChar.test(password)) {
    alert('Password must contain at least one special character');
    return false;
  }

  if (!regex.number.test(password)) {
    alert('Password must contain at least one number');
    return false;
  }

  if (!regex.uppercase.test(password)) {
    alert('Password must contain at least one uppercase letter');
    return false;
  }

  return true;
}

</script>

<style>
@import "/node_modules/animate.css"
</style>
