import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjCX2rPjlK3oS7IJpxgK9ofamov4vBibQ",
  authDomain: "portofolio-main.firebaseapp.com",
  projectId: "portofolio-main",
  storageBucket: "portofolio-main.firebasestorage.app",
  messagingSenderId: "587957194529",
  appId: "1:587957194529:web:2fac071bb894044191b860",
  // measurementId: "G-RL94SZBDPT"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };