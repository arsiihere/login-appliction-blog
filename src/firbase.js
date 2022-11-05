// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDqE8Km2pLZPRb0Y_N6umvXXMsaGaLcTHk",
  authDomain: "newloginproject-ce331.firebaseapp.com",
  projectId: "newloginproject-ce331",
  storageBucket: "newloginproject-ce331.appspot.com",
  messagingSenderId: "1016693430336",
  appId: "1:1016693430336:web:9660ed7c29e0db700727a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export function SignUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function LogOut() {
  signOut(auth);
}
