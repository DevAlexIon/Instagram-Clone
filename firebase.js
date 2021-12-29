// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7B9QTpjybtaumt6KgDw94akkm_frsSV0",
  authDomain: "insta-clone-7877d.firebaseapp.com",
  projectId: "insta-clone-7877d",
  storageBucket: "insta-clone-7877d.appspot.com",
  messagingSenderId: "601321974630",
  appId: "1:601321974630:web:108c218ae2a5686ed676a7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
