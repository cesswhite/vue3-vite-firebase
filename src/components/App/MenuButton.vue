<template>
  <router-link
    :to="to"
    class="rounded-md h-auto mb-4 w-full inline-block group"
  >
    <button
      class="rounded-md flex font-bold w-full py-4 px-2 items-center justify-start group-hover:bg-gray-800 group-hover:bg-opacity-10"
    >
      <div
        class="fill-current text-lg text-gray-800 text-opacity-90 group-hover:text-opacity-100"
      >
        <slot name="icon" />
      </div>
      <div class="m-0 text-xl label-default">
        <slot name="text" />
      </div>
    </button>
  </router-link>
</template>

<script setup lang="ts">
defineProps({
  to: String,
});
</script>

<style scoped></style>
