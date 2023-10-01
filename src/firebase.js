import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC68UpykdnGEA2a1-Z0Fb1GJBHgEgjYm7c",
  authDomain: "netflix-e3ebd.firebaseapp.com",
  projectId: "netflix-e3ebd",
  storageBucket: "netflix-e3ebd.appspot.com",
  messagingSenderId: "1073928381107",
  appId: "1:1073928381107:web:3561f93b43cf1a375546c6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
