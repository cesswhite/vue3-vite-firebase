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
    <app-menu-button to="/app/crud/updated">
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
      <icon-heroicons-solid-logout class="text-xl mr-2" />
      <span class="font-bold text-md"> Logout </span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
