<template>
  <div class="w-full -sm:h-screen -sm:w-full">
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
        <h1 class="font-bold mb-1 text-3xl text-gray-800">Create account</h1>
        <h2 class="font-semibold text-lg text-gray-800 text-opacity-60">
          Please fill the fields below
        </h2>
      </div>
      <form action="" class="mb-4">
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
            v-model.trim="email"
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
            :type="typePassword"
            placeholder="*******"
            autocomplete="current-password"
            v-model.trim="password"
          />
          <div class="icon-button">
            <icon-heroicons-solid-lock-closed />
          </div>
          <button type="button" @click="showPassword" class="show-password">
            <icon-heroicons-solid-eye-off v-if="closeEye" />
            <icon-heroicons-solid-eye v-if="!closeEye" />
          </button>
        </div>
        <div class="flex flex-col relative group">
          <label for="confirmPasswordSignUp" class="label-default"
            >Confirm password</label
          >
          <input
            class="input-default group-hover:border-opacity-15"
            id="confirmPasswordSignUp"
            :type="confirmTypePassword"
            placeholder="*******"
            autocomplete="current-password"
            v-model.trim="confirmPassword"
          />
          <div class="icon-button">
            <icon-heroicons-solid-lock-closed />
          </div>
          <button
            type="button"
            @click="confirmShowPassword"
            class="show-password"
          >
            <icon-heroicons-solid-eye-off v-if="confirmCloseEye" />
            <icon-heroicons-solid-eye v-if="!confirmCloseEye" />
          </button>
        </div>
      </form>
      <div>
        <button @click="register" class="mb-4 w-full btn-primary">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router";

let typePassword = ref("password"),
  confirmTypePassword = ref("password");

const closeEye = ref(false),
  confirmCloseEye = ref(false),
  showErrorMessage = ref(false),
  email = ref(""),
  password = ref(""),
  confirmPassword = ref(""),
  errMsg = ref(""),
  router = useRouter();

const showPassword = () => {
  closeEye.value = !closeEye.value;
  typePassword.value = typePassword.value === "password" ? "text" : "password";
};

const confirmShowPassword = () => {
  confirmCloseEye.value = !confirmCloseEye.value;
  confirmTypePassword.value =
    confirmTypePassword.value === "password" ? "text" : "password";
};

const register = () => {
  const pass: any = password.value;
  const confirmPass: any = confirmPassword.value;

  if (pass !== confirmPass) {
    alert("Same data");
    return;
  }
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((data) => {
      router.push("/auth/login");
    })
    .catch((error) => {
      console.log(error);
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
      showErrorMessage.value = true;

      // Hidde element after two seconds
      // setTimeout(() => {
      //   showErrorMessage.value = false;
      // }, 2000);
    });
};
</script>
