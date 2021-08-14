<template>
  <div class="w-full">
    <div class="mb-8">
      <h1 class="font-bold text-6xl text-gray-50">Welcome!</h1>
      <h2 class="font-bold text-2xl text-gray-50 text-opacity-90">
        Please create your account
      </h2>
    </div>
    <div
      id="formContainer"
      class="border-default rounded-xl bg-gray-50 shadow-xl py-10 px-6"
    >
      <form action="">
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
        <div class="flex flex-col relative group">
          <label for="emailSignUp" class="label-default">Email</label>
          <input
            class="input-default group-hover:border-opacity-15"
            id="emailSignUp"
            type="text"
            placeholder="mail@mail.com"
            autocomplete="email"
            v-model="email"
          />
          <div class="icon-button">
            <icon-heroicons-solid-mail />
          </div>
        </div>
        <div class="flex flex-col relative group">
          <label for="passwordSignUp" class="label-default">Password</label>
          <input
            class="input-default group-hover:border-opacity-15"
            id="passwordSignUp"
            type="password"
            placeholder="*******"
            autocomplete="current-password"
            v-model="password"
          />
          <div class="icon-button">
            <icon-heroicons-solid-lock-closed />
          </div>
        </div>
      </form>
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
      <div>
        <button @click="register" class="mt-8 mb-8 w-full btn-primary">
          Join me!
        </button>
        <div class="flex flex-col justify-center items-center">
          <p
            class="font-semibold text-right text-md text-gray-800 text-opacity-60"
          >
            Already have an account?
            <router-link to="/auth/login" class="text-gray-800"
              >Sign In</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router";

// const username = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();
const errMsg = ref();
const register = () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((data) => {
      router.push("/auth/login");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
</script>
