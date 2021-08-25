import { createApp } from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "virtual:windi.css";
import "virtual:windi-devtools";
import "../src/assets/index.css";
import Message from "./plugins/message";

const firebaseConfig = {
  apiKey: "AIzaSyAhZFOzp07S2iogpMf8v8AgvO0XVncHd6w",
  authDomain: "tutorial-crud-ab303.firebaseapp.com",
  projectId: "tutorial-crud-ab303",
  storageBucket: "tutorial-crud-ab303.appspot.com",
  messagingSenderId: "939858494500",
  appId: "1:939858494500:web:d1a9f6639f7a41b16ec4b1",
  measurementId: "G-SMD2D7T8CB",
};

firebase.initializeApp(firebaseConfig);
const app = createApp(App);
// app.directive("loading", (el, binding) => {
//   const overlay = document.createElement("div");
//   overlay.classList.add("w-full", "h-screen", "bg-gray-900", "bg-opacity-30");
//   if (binding.value) {
//     el.appendChild(overlay);
//   }
// });
// app.provide("$message", Message);
app.use(Message);
app.use(router);
app.use(createPinia());
app.mount("#app");
