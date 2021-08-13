import firebase from "firebase";

let config = {
  apiKey: "AIzaSyAhZFOzp07S2iogpMf8v8AgvO0XVncHd6w",
  authDomain: "tutorial-crud-ab303.firebaseapp.com",
  projectId: "tutorial-crud-ab303",
  storageBucket: "tutorial-crud-ab303.appspot.com",
  messagingSenderId: "939858494500",
  appId: "1:939858494500:web:d1a9f6639f7a41b16ec4b1",
  measurementId: "G-SMD2D7T8CB",
};

firebase.initializeApp(config);

export default firebase.database();
