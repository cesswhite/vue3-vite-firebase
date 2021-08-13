<template>
  <div class="bg-image-sign-up bg-cover bg-no-repeat bg-center h-screen">
    <app-layout class="h-screen relative">
      <div class="w-1/3 center-x-y">
        <!-- <button
          @click="goBack"
          class="
            flex
            rounded-md
            bg-opacity-10 bg-gray-50
            mb-4
            py-1
            px-4
            items-center
            backdrop-filter backdrop-blur-sm
          "
        >
          <svg
            class="h-4 fill-current w-4 text-gray-50"
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
          <span class="font-bold text-xl ml-2 text-gray-50">Back</span>
        </button> -->
        <auth-sign-up></auth-sign-up>
      </div>
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

<style scoped>
.bg-image-sign-up {
  background-image: url("/img/backgroundv2.webp");
}
</style>
