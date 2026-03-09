import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzzMxh-M2gi0gaGQX_PI1iLM5a00KFvj0",
  authDomain: "gau-trust-milk-5e9e7.firebaseapp.com",
  projectId: "gau-trust-milk-5e9e7",
  storageBucket: "gau-trust-milk-5e9e7.appspot.com",
  messagingSenderId: "913855290734",
  appId: "1:913855290734:web:0af92af0d880cbffe8357f"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
