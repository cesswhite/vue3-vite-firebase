<template>
  <div class="h-screen w-full">
    <app-layout>
      <button @click="goBack" class="flex items-center">
        <svg
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="font-semibold text-xl ml-4">Back</span>
      </button>
      <auth-sign-in></auth-sign-in>
    </app-layout>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<style scoped></style>
