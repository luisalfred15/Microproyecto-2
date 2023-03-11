import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBPh33Yx_aXG-Vdd-N1Hw9RHFIfcjW-qWY",
  authDomain: "micro-2-6211a.firebaseapp.com",
  projectId: "micro-2-6211a",
  storageBucket: "micro-2-6211a.appspot.com",
  messagingSenderId: "636279852668",
  appId: "1:636279852668:web:f76c8969ac9b75a8fbc3f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const store = getStorage(app)
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: "select_account"})