// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt1zYJJ2jOfMrIv9gXrZFYgxculjct0PM",
  authDomain: "ali-project-89b0c.firebaseapp.com",
  projectId: "ali-project-89b0c",
  storageBucket: "ali-project-89b0c.appspot.com",
  messagingSenderId: "624886356335",
  appId: "1:624886356335:web:e590fefded561a849c709a",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
