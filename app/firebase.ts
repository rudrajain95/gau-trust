import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzzMxh-M2gi0gaGQX_PI1iLM5a00KFvj0",
  authDomain: "gau-trust-milk-5e9e7.firebaseapp.com",
  projectId: "gau-trust-milk-5e9e7",
  storageBucket: "gau-trust-milk-5e9e7.firebasestorage.app",
  messagingSenderId: "913855290734",
  appId: "1:913855290734:web:0af92af0d880cbffe8357f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
