<template>
  <div class="h-screen w-full relative">
    <div id="nav" class="mx-auto max-w-xl text-center">
      <router-link to="/" class="text-xl">Home</router-link>
      |
      <router-link to="/tutorials" class="text-xl">Tutorials</router-link>
      |
      <router-link to="/add" class="text-xl">Add</router-link>
    </div>
    <div class="? h-screen">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {},
});
</script>

<style></style>
