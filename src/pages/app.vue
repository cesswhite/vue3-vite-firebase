<template>
  <div class="w-full grid grid-cols-6">
    <div class="h-auto bg-gray-50 w-full px-2 col-span-1">
      <app-menu />
    </div>
    <div class="bg-gray-200 bg-opacity-70 p-10 col-span-5">
      Dashboard
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import firebase from "firebase";
import { useRouter } from "vue-router";
import { onBeforeUnmount } from "vue";
const router = useRouter();
const authListener = firebase.auth().onAuthStateChanged(function (user) {
  console.log(!user);
  if (!user) {
    // not logged in
    alert("you must be logged in to view this. redirecting to the home page");
    router.push("/");
  }
});
onBeforeUnmount(() => {
  // clear up listener
  authListener();
});
</script>

<style scoped></style>
