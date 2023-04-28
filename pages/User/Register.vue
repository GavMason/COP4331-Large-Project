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
              id="confirmPassword"
              type="password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm Password"
              required
            />
          </div>
          <span id = "missingInfo"></span>
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
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let missingInfoMessage = '';

    console.log(password + " --- " + confirmPassword);

    if (password !== confirmPassword) {
      missingInfoMessage += 'Passwords do not match.<br>';
    }

    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialChars.test(password)) {
      missingInfoMessage += 'Password should contain at least 1 special character (!@#$%^&*(),.?":{}|<>).<br>';
    }

    const uppercaseChars = /[A-Z]/;
    if (!uppercaseChars.test(password)) {
      missingInfoMessage += 'Password should contain at least 1 uppercase letter.<br>';
    }

    const numbers = /[0-9]/;
    if (!numbers.test(password)) {
      missingInfoMessage += 'Password should contain at least 1 number.<br>';
    }

    if (missingInfoMessage !== '') {
      document.getElementById('missingInfo').innerHTML = missingInfoMessage;
      document.getElementById('missingInfo').style.color = 'red';
      return;
    }

    //router.push('/myjournal')
    // send data to backend here!
    const data = {firstName, lastName, username, password};
    fetch('localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if(response.ok){
        console.log('Registration Successful');
        console.log('This is where we should push to myJournal');
        router.push('/myjournal')
      }
      else{
        console.log('Registration Failed');
      }
    })
    .catch(error => {
      console.error('Error during registration:', error);
    });
  };
</script>
