<template>
  <div class="bg-image-sign-in bg-default h-screen">
    <app-layout class="h-screen relative">
      <div class="w-1/3 center-x-y">
        <auth-sign-in></auth-sign-in>
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
.bg-image-sign-in {
  background-image: url("/img/background.webp");
  background-color: #fafafa;
}
</style>
