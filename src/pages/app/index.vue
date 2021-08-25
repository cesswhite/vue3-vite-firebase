<script setup lang="ts">
import { ref, onMounted } from "vue";
import firebase from "firebase";
import dataServices from "../../services/TutorialDataService";

onMounted(() => {
  getAll();
});
let data: any = ref([]);
const isLoading = ref(false);
const getAll = () => {
  // console.log("User", firebase.auth().currentUser.uid);

  isLoading.value = true;
  dataServices.getAll().then((res: any) => {
    data.value = res.data;
    isLoading.value = false;
  });

  // setTimeout(() => {
  //   isLoading.value = false;
  // }, 2000);
};
</script>

<template>
  <div class="relative">
    <app-loading :show="isLoading" />
    <!-- <button class="bg-gray-800 py-2 px-8 text-gray-50" @click="getAll">
      Get All
    </button> -->
    <!-- <div>INDEX APP</div> -->
    <div class="p-10">
      <div class="">
        <table class="w-full">
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left">Description</th>
            <th class="text-left">Published</th>
          </tr>
          <tr v-for="__d in data" :key="__d.id">
            <td>
              {{ __d.title }}
            </td>
            <td>
              {{ __d.description }}
            </td>
            <td>
              {{ __d.published }}
            </td>
          </tr>
        </table>
      </div>
      <!-- <pre>
      {{ data }}
    </pre> -->
    </div>
  </div>
</template>
