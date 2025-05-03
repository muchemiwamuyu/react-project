import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXAxhJFPBwPwT8xAU5RKhXm7kNIF-E-5M",
    authDomain: "sample-firebase-ai-app-196ab.firebaseapp.com",
    projectId: "sample-firebase-ai-app-196ab",
    storageBucket: "sample-firebase-ai-app-196ab.firebasestorage.app",
    messagingSenderId: "481238077138",
    appId: "1:481238077138:web:4f935a0a38a3a9d030a70b"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};