import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDEq2HliuUVihC7PTKBd2Lwwh3ADNOoyKM",
  authDomain: "chat1-68686.firebaseapp.com",
  projectId: "chat1-68686",
  storageBucket: "chat1-68686.appspot.com",
  messagingSenderId: "718709351000",
  appId: "1:718709351000:web:33191991a29def3aa3202d",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
