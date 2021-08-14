<template>
  <div class="h-screen w-full pt-40 relative">
    <app-menu-button to="/app">
      <template v-slot:icon>
        <icon-heroicons-solid-home class="mr-2" />
      </template>
      <template v-slot:text>
        <span>Home</span>
      </template>
    </app-menu-button>
    <app-menu-button to="/app/crud/create">
      <template v-slot:icon>
        <icon-heroicons-solid-plus class="mr-2" />
      </template>
      <template v-slot:text>
        <span>Create</span>
      </template>
    </app-menu-button>
    <app-menu-button to="/app/crud/read">
      <template v-slot:icon>
        <icon-heroicons-solid-clipboard-list class="mr-2" />
      </template>
      <template v-slot:text>
        <span>Read</span>
      </template>
    </app-menu-button>
    <app-menu-button to="/app/crud/update">
      <template v-slot:icon>
        <icon-heroicons-solid-pencil-alt class="mr-2" />
      </template>
      <template v-slot:text>
        <span>Updated</span>
      </template>
    </app-menu-button>
    <app-menu-button to="/app/crud/delete">
      <template v-slot:icon>
        <icon-heroicons-solid-trash class="mr-2" />
      </template>
      <template v-slot:text>
        <span>Delete</span>
      </template>
    </app-menu-button>
    <div class="flex w-full bottom-4 absolute items-center">
      <button class="flex items-center" @click="logout">
        <icon-heroicons-solid-logout class="text-xl mr-2" />
        <span class="font-bold text-md"> Logout </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"; // used for conditional rendering
import firebase from "firebase";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(true);

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true; // if we have a user
  } else {
    isLoggedIn.value = false; // if we do not
  }
});

const logout = () => {
  firebase.auth().signOut();
  router.push("/");
};
</script>

<style scoped></style>
