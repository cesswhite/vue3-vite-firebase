import { createApp } from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "virtual:windi.css";
import "virtual:windi-devtools";
import "../src/assets/index.css";

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
app.use(router);
app.use(createPinia());
app.mount("#app");
