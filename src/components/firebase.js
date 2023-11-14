import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhLbvHvR4jk8YlPtiaGV4HciztZx1HEF8",
  authDomain: "clarionchat-3428b.firebaseapp.com",
  projectId: "clarionchat-3428b",
  storageBucket: "clarionchat-3428b.appspot.com",
  messagingSenderId: "1044841619604",
  appId: "1:1044841619604:web:c5cc7acd6990b7fe7e9481",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
