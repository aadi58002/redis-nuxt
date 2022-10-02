<script setup lang="ts">
async function login(event: SubmitEvent) {
  const { userName, password } = Object.fromEntries(new FormData(event.target))
  const myToken = btoa(`${userName}:${password}`)
  const res = await $fetch('/api/login', {
    method: 'post',
    header: {
      alg: 'HS256',
      typ: 'JWT',
    },
    body: {
      token: myToken,
    },
  })
}
</script>

<template>
  <div class="w-full max-w-xs flex flex-col justify-center h-full" m="auto">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="login">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userName">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="userName" type="text" placeholder="Username" required
        >
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password" placeholder="******************" name="password" required
        >
      </div>
      <div class="flex items-center justify-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
    <NuxtLink to="/register">
      Register page
    </NuxtLink>
    <DarkToggle />
  </div>
</template>
