<template>
  <div class="w-full relative -xl:px-6">
    <app-layout class="h-screen">
      <div class="flex flex-col w-1/2 center-x-y items-center -sm:w-full">
        <h1 class="font-bold mb-2 w-full text-gray-800 text-6xl">
          Vue + Firebase Auth/API
        </h1>
        <p class="font-semibold text-xl w-full text-gray-800 text-opacity-80">
          A base project with Vue 3 + Vite + WindiCSS + Firebase
        </p>
        <div class="mt-6 w-full grid gap-2 grid-cols-2 -sm:grid-cols-1">
          <button
            @click="goToLogin"
            p="y-2 x-8"
            text="xl gray-50"
            font="bold"
            bg="gray-800"
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
      <div class="font-bold mx-auto text-center w-full bottom-2 absolute">
        <small>By Eco Development Studios</small>
      </div>
    </app-layout>
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
