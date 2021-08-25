<template>
  <div class="top-0 left-0 relative">
    <div
      v-if="show"
      class="
        h-screen
        bg-gray-900 bg-opacity-60
        w-full
        top-0
        left-0
        z-20
        absolute
      "
    >
      <div class="h-15 animate-spin w-15 center-x-y">
        <svg-eco-logo class="mx-auto fill-current text-gray-50" />
        <!-- <icon-heroicons-solid-lightning-bolt /> -->
      </div>
    </div>
  </div>
  <!-- <div
    class="
      rounded-md
      flex
      bg-red-200
      h-20
      mb-8
      w-full
      transition-all
      ease-in-out
      duration-100
      items-center
      justify-center
    "
  >
    <p class="font-bold text-lg text-red-700">This is a tes</p>
  </div> -->
</template>

<script setup lang="ts">
defineProps({
  show: Boolean,
});
import { onMounted } from "vue";

onMounted(() => {
  // alert("Global property");
});
</script>

<style scoped></style>
