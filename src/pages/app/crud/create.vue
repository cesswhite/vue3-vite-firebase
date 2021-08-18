<template>
  <div>
    <h1 class="font-bold text-2xl text-gray-800">CREATE VIEW</h1>
  </div>
  <div>
    <div class="rounded-md mx-auto bg-gray-50 py-4 px-4 w-1/2">
      <form action="">
        <div class="flex flex-col relative group">
          <label for="nameCreate" class="label-default">Name</label>
          <input
            class="input-default group-hover:border-opacity-15"
            id="nameCreate"
            type="text"
            placeholder="Name"
            autocomplete="name"
            v-model="name"
          />
          <div class="icon-button">
            <icon-heroicons-solid-user />
          </div>
        </div>
        <div class="flex flex-col relative group">
          <label for="descriptionCreate" class="label-default"
            >Description</label
          >
          <input
            class="input-default group-hover:border-opacity-15"
            id="descriptionCreate"
            type="text"
            placeholder="Description"
            autocomplete="name"
            v-model="description"
          />
          <div class="icon-button">
            <icon-heroicons-solid-user />
          </div>
        </div>
      </form>
      <div class="mt-4 w-full">
        <button
          @click="createUser"
          class="
            rounded-md
            font-bold
            bg-gray-800
            w-full
            py-4
            text-gray-50
            hover:shadow-xl
          "
        >
          Create User
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import dataServices from "../../../services/TutorialDataService";
// import Tutorial from "../../../types/Tutorial";
// import ResponseData from "../../../types/ResponseData";

// onMounted(() => {
//   createUser();
// });
const name = ref("");
const description = ref("");
const tutorial: any = {
  id: null,
  title: name.value,
  description: description.value,
  published: false,
};
const createUser = () => {
  let data = {
    title: name.value,
    description: description.value,
  };
  dataServices.create(data).then((response: any) => {
    console.log(response.data);
  });
};
</script>
