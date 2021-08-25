<template>
  <div class="flex w-full">
    <div class="h-auto bg-gray-50 px-2 w-1/6 -xl:w-1/5">
      <app-menu />
    </div>
    <div class="bg-gray-200 bg-opacity-70 w-full -xl:w-4/5">
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
