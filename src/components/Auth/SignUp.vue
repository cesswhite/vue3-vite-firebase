<script setup lang="ts">
import { ref } from "vue";
import firebase from "firebase";
// import { useRouter } from "vue-router";

// const username = ref("");
const email = ref("");
const password = ref("");
// const router = useRouter();
const register = () => {
  firebase
    .auth() // get the auth api
    .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
    .then((data) => {
      alert("Successfully registered!");
      console.log(data);
    })
    .catch((error) => {
      alert(error.code);
      alert(error.message);
    });
};
</script>

<template>
  <div class="w-full">
    <div class="mb-8">
      <h1 class="font-bold text-6xl text-gray-50">Welcome!</h1>
      <h2 class="font-bold text-2xl text-gray-50 text-opacity-90">
        Please create your account
      </h2>
    </div>
    <div id="formContainer" class="rounded-xl bg-gray-50 shadow-xl py-10 px-6">
      <form>
        <!-- <div class="flex flex-col relative">
          <label class="label-default" for="usernameSignUp">Username</label>
          <input
            autocomplete="username"
            class="input-default"
            id="usernameSignUp"
            type="text"
            placeholder="username"
            v-model="username"
          />
          <div class="icon-button">
            <icon-heroicons-solid-user />
          </div>
        </div> -->
        <div class="flex flex-col relative">
          <label for="emailSignUp" class="label-default">Email</label>
          <input
            class="input-default"
            id="emailSignUp"
            type="text"
            placeholder="email"
            autocomplete="email"
            v-model="email"
          />
          <div class="icon-button">
            <icon-heroicons-solid-mail />
          </div>
        </div>
        <div class="flex flex-col relative">
          <label for="passwordSignUp" class="label-default">Password</label>
          <input
            class="input-default"
            id="passwordSignUp"
            type="password"
            placeholder="password"
            autocomplete="current-password"
            v-model="password"
          />
          <div class="icon-button">
            <icon-heroicons-solid-lock-closed />
          </div>
        </div>
        <!-- <div class="flex flex-col relative">
          <label for="confirmPasswordSignUp" class="label-default"
            >Confirm Password</label
          >
          <input
            class="input-default"
            id="confirmPasswordSignUp"
            type="password"
            placeholder="password"
            v-model="password"
          />
          <div class="icon-button">
            <icon-heroicons-solid-lock-closed />
          </div>
        </div> -->
        <!-- <div
          class="font-semibold text-right text-sm text-gray-800 text-opacity-90"
        >
          <a href="">Forgot your password?</a>
        </div> -->
        <div>
          <button class="mt-8 mb-8 w-full btn-primary" @click="register">
            Join me!
          </button>
          <div class="flex flex-col justify-center items-center">
            <p
              class="
                font-semibold
                text-right text-md text-gray-800 text-opacity-60
              "
            >
              Already have an account?
              <router-link to="/auth/login" class="text-gray-800"
                >Sign In</router-link
              >
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
