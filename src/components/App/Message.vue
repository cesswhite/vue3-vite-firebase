<template>
  <div
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
    <p class="font-bold text-lg text-red-700">This is a test</p>
  </div>
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
