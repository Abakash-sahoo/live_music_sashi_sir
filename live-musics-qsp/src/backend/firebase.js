// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//authenticaton service
import {getAuth} from 'firebase/auth'
//database service from firebase
import {getFirestore} from 'firebase/firestore'

//storage service from firebase
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAe-WRHIszvTb9BEn4RI3aa7K_9FXuh_lo",
    authDomain: "live-music-34c65.firebaseapp.com",
    projectId: "live-music-34c65",
    storageBucket: "live-music-34c65.firebasestorage.app",
    messagingSenderId: "411057608345",
    appId: "1:411057608345:web:67eb8d829a59f968114a08"

    // apiKey: "AIzaSyDaY2d-PS3CiuUAPDx5d7Q-VOd1kXHk-bs",
    // authDomain: "live-music-a2369.firebaseapp.com",
    // projectId: "live-music-a2369",
    // storageBucket: "live-music-a2369.firebasestorage.app",
    // messagingSenderId: "968884054755",
    // appId: "1:968884054755:web:42787824db45ff6c2bb3d6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export let __AUTH = getAuth(firebaseApp);
export let __DB=getFirestore(firebaseApp);
export let __STORAGE=getStorage(firebaseApp);

export default firebaseApp;