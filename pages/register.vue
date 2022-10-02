<script setup lang="ts">
async function login(event: SubmitEvent) {
  const { email, userName, password } = Object.fromEntries(new FormData(event.target))
  const myToken = btoa(`${email}:${userName}:${password}`)
  console.log(myToken)
  const res = await $fetch('/api/register', {
    method: 'post',
    body: {
      token: myToken,
    },
  })
  console.log(res)
}
</script>

<template>
  <div class="w-full max-w-xs flex flex-col justify-center h-full" m="auto">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="login">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="text" placeholder="Email" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userName">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="userName" type="text" placeholder="User Name" required>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="******************" name="password" required>
      </div>
      <div class="flex items-center justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign Up
        </button>
      </div>
    </form>
    <NuxtLink to="/">
      Login page
    </NuxtLink>
    <DarkToggle />
  </div>
</template>
