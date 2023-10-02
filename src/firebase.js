import { initializeApp } from 'firebase/app';
import { getAuth  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
   apiKey: "AIzaSyB1ECYiswTob15gHOyYQ_6NJ8WcyXS97G0",
   authDomain: "chat-app-f8751.firebaseapp.com",
   projectId: "chat-app-f8751",
   storageBucket: "chat-app-f8751.appspot.com",
   messagingSenderId: "477465846565",
   appId: "1:477465846565:web:eb2d4042d34cfbcb47b0cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
