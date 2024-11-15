import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvITVWgs2Zz-RbwErojee4QHDDD3RBNN8",
    authDomain: "facebook-417d2.firebaseapp.com",
    projectId: "facebook-417d2",
    storageBucket: "facebook-417d2.appspot.com",
    messagingSenderId: "985924471247",
    appId: "1:985924471247:web:9f145fccef9ba0dbbaeaba",
    measurementId: "G-LSRE8GFXN8"
  };
  
  const app = initializeApp(firebaseConfig);
  
  export const auth = getAuth(app);
  export const db = getFirestore(app);
   //Initialize services after Firebase app
  //const firebaseApp = initializeApp(firebaseConfig);
  export const storage = getStorage(app);

  