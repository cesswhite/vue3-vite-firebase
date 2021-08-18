<script setup lang="ts">
import { ref, onMounted } from "vue";
import dataServices from "../../services/TutorialDataService";

onMounted(() => {
  getAll();
});
let data: any = ref([]);
const getAll = () => {
  dataServices.getAll().then((res: any) => {
    console.log(res.data);
    data.value = res.data;
  });
};
</script>

<template>
  <button class="bg-gray-800 py-2 px-8 text-gray-50" @click="getAll">
    Get All
  </button>
  <div>INDEX APP</div>
  <div>
    <div>
      <table>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Published</th>
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
</template>
