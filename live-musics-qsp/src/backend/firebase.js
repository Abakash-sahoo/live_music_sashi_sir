// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Authentication Service from Firebase
import { getAuth } from "firebase/auth";

// Database Services from Firebase
import { getFirestore } from "firebase/firestore";

// Storage Service from Firebase
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe-WRHIszvTb9BEn4RI3aa7K_9FXuh_lo",
  authDomain: "live-music-34c65.firebaseapp.com",
  projectId: "live-music-34c65",
  storageBucket: "live-music-34c65.firebasestorage.app",
  messagingSenderId: "411057608345",
  appId: "1:411057608345:web:67eb8d829a59f968114a08"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export let __AUTH = getAuth(firebaseApp);
export let __DB = getFirestore(firebaseApp);
export let __STORAGE = getStorage(firebaseApp);

export default firebaseApp;
