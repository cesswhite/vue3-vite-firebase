<template>
  <div class="? flex h-screen w-full items-center justify-center">
    <div
      class="rounded-md mx-auto bg-gray-50 border-2 border-gray-300 shadow-xl p-8 w-1/3"
    >
      <div v-if="!submitted" class="">
        <h1 class="font-bold mb-8 text-gray-800 text-6xl">Add New Tutorial</h1>
        <div class="flex flex-col mb-10">
          <label for="title" class="font-bold text-xl text-gray-800"
            >Title</label
          >
          <input
            type="text"
            class="rounded-md border-2 border-gray-300 h-12"
            id="title"
            required
            v-model="tutorial.title"
            name="title"
          />
        </div>

        <div class="flex flex-col mb-10">
          <label for="description" class="font-bold text-xl text-gray-800"
            >Description</label
          >
          <input
            class="rounded-md border-2 border-gray-300 h-12"
            id="description"
            required
            v-model="tutorial.description"
            name="description"
          />
        </div>
        <div class="w-full">
          <button
            @click="saveTutorial"
            class="rounded-md font-bold bg-gray-800 text-center text-xl w-full py-4 text-gray-50"
          >
            Submit
          </button>
        </div>
      </div>

      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newTutorial">Add</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TutorialDataService from "../services/TutorialDataService";
import Tutorial from "../types/Tutorial";
import ResponseData from "../types/ResponseData";

export default defineComponent({
  data: () => ({
    tutorial: {
      id: null,
      title: "",
      description: "",
      published: false,
    } as Tutorial,
    submitted: false,
  }),

  methods: {
    saveTutorial() {
      const data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
      };

      TutorialDataService.create(data)
        .then((response: ResponseData) => {
          this.tutorial.id = response.data.id;
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {} as Tutorial;
    },
  },
});
</script>

<style></style>
