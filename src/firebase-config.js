// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL8pZ37kbNX3g_Tf4bn3Pn2sZxdj5m23Y",
  authDomain: "whatsappish.firebaseapp.com",
  projectId: "whatsappish",
  storageBucket: "whatsappish.appspot.com",
  messagingSenderId: "358773295400",
  appId: "1:358773295400:web:aa6766fe0bbbd5fe77681d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
