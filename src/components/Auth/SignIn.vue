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
            required
            class="input-default group-hover:border-opacity-15"
            id="emailSignIn"
            type="text"
            placeholder="mail@mail.com"
            autocomplete="email"
            v-model.trim="email"
          />
          <div class="icon-button">
            <icon-heroicons-solid-mail />
          </div>
        </div>
        <div class="flex flex-col relative group">
          <label for="passwordSignUp" class="label-default">Password</label>
          <input
            required
            class="input-default group group-hover:border-opacity-15"
            id="passwordSignUp"
            type="password"
            placeholder="*******"
            autocomplete="current-password"
            v-model.trim="password"
            v-on:keyup.enter="login"
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
        <button
          type="button"
          @click="login"
          class="mt-8 mb-8 w-full btn-primary"
        >
          <span v-if="!showLoading"> Let's go! </span>
          <icon-eos-icons-loading v-else class="h-7" />
        </button>
      </form>

      <div>
        <!-- {{ errMsg }} -->
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

const showLoading = ref(false);
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();
const login = () => {
  showLoading.value = true;

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
          errMsg.value = "Email or password was incorrect";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
      showLoading.value = false;

      alert(error.code);
      // console.log(error);
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
