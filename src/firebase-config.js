
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCYyp-m0DndA6Hwj6s51P7ICHAopLu4n4s",
    authDomain: "design-todo.firebaseapp.com",
    databaseURL: "https://design-todo-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "design-todo",
    storageBucket: "design-todo.appspot.com",
    messagingSenderId: "172865087236",
    appId: "1:172865087236:web:a15c151058a9b153745251",
    measurementId: "G-T8Y0M5Z0D8"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

  