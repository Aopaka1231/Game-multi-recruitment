import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1rI9_Qs9FyhdW61WxpI0yvcsdEEmEIy8",
  authDomain: "game-recruit.firebaseapp.com",
  projectId: "game-recruit",
  storageBucket: "game-recruit.appspot.com",
  messagingSenderId: "496694476932",
  appId: "1:496694476932:web:28910e4b105c0d593442d1"
};

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);