<template>
  <div class="w-full relative">
    <div
      class="? h-screen mx-auto max-w-screen-xl relative -xl:w-full -xl:px-6"
    >
      <div
        class="
          ?
          flex
          w-1/2
          flex-col
          center-x-y
          items-center
          justify-center
          -sm:w-full
        "
      >
        <h1 class="font-bold mb-4 text-gray-800 text-6xl">
          Vue + Firebase Auth/API
        </h1>
        <div class="mb-4 grid gap-2 grid-cols-2 -sm:grid-cols-1">
          <button
            @click="goToLogin"
            p="y-2 x-8"
            text="xl gray-800 hover:gray-50"
            font="bold"
            bg="gray-50 hover:gray-800"
            border="rounded-md"
          >
            Sign In
          </button>
          <button
            @click="goToSignUp"
            p="y-2 x-8"
            text="xl"
            font="bold"
            border="rounded-md 2 gray-800"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goToLogin = () => {
  router.push("/auth/login");
};
const goToSignUp = () => {
  router.push("/auth/signup");
};
</script>

<style scoped></style>
