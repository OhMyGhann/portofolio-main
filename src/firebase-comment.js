import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjCX2rPjlK3oS7IJpxgK9ofamov4vBibQ",
    authDomain: "portofolio-main.firebaseapp.com",
    projectId: "portofolio-main",
    storageBucket: "portofolio-main.firebasestorage.app",
    messagingSenderId: "587957194529",
    appId: "1:587957194529:web:2fac071bb894044191b860",
    measurementId: "G-RL94SZBDPT"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };