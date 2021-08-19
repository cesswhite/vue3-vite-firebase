<template>
  <div class="w-full">
    <div
      id="formContainer"
      class="
        border-default
        rounded-xl
        flex flex-col
        bg-gray-50
        shadow-xl
        py-10
        px-6
        justify-center
        -sm:rounded-none -sm:h-screen -sm:shadow-none
      "
    >
      <div class="text-center mb-8">
        <svg-eco-logo class="mx-auto h-10 mb-2 w-10" />
        <h1 class="font-bold mb-1 text-3xl text-gray-800">Welcome back</h1>
        <h2 class="font-semibold text-lg text-gray-800 text-opacity-60">
          Please login to your account
        </h2>
      </div>
      <form action="">
        <div class="flex flex-col relative group">
          <label for="emailSignIn" class="label-default">Email</label>
          <input
            class="input-default group-hover:border-opacity-15"
            id="emailSignIn"
            type="text"
            placeholder="mail@mail.com"
            autocomplete="email"
            v-model="email.trim"
          />
          <div class="icon-button">
            <icon-heroicons-solid-mail />
          </div>
        </div>
        <div class="flex flex-col relative group">
          <label for="passwordSignUp" class="label-default">Password</label>
          <input
            class="input-default group group-hover:border-opacity-15"
            id="passwordSignUp"
            type="password"
            placeholder="*******"
            autocomplete="current-password"
            v-model="password.trim"
          />
          <div class="icon-button">
            <icon-heroicons-solid-lock-closed />
          </div>
        </div>
        <div
          class="font-semibold text-right text-sm text-gray-800 text-opacity-60"
        >
          <a href="#">Forgot your password?</a>
        </div>
      </form>

      <div>
        <button @click="login" class="mt-8 mb-8 w-full btn-primary">
          Let's go!
        </button>
        <div class="flex flex-col justify-center items-center">
          <p
            class="
              font-semibold
              text-right text-md text-gray-800 text-opacity-60
            "
          >
            No registered yet?
            <router-link to="/auth/signup" class="text-gray-800"
              >Create an account</router-link
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

const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();
const login = () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((data) => {
      router.push("/app");
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

      alert(error.code);
      console.log(error);
    });
};
// const router = useRouter();
// const errMsg = ref();
// const register = () => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(email.value, password.value)
//     .then((data) => {
//       router.push("/auth/login");
//     })
//     .catch((error) => {
//       switch (error.code) {
//         case "auth/invalid-email":
//           errMsg.value = "Invalid email";
//           break;
//         case "auth/user-not-found":
//           errMsg.value = "No account with that email was found";
//           break;
//         case "auth/wrong-password":
//           errMsg.value = "Incorrect password";
//           break;
//         default:
//           errMsg.value = "Email or password was incorrect";
//           break;
//       }
//     });
// };
</script>

<style scoped></style>
