import { initializeApp } from "firebase/app";
import { getAuth, OAuthProvider, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDIRyWseCObZgO5L5K-8GaRn3ox_enAizQ",
  authDomain: "qol-account-creation-userflow.firebaseapp.com",
  projectId: "qol-account-creation-userflow",
  storageBucket: "qol-account-creation-userflow.firebasestorage.app",
  messagingSenderId: "539838565682",
  appId: "1:539838565682:web:de5249130a9f75d8e29b2b",
  measurementId: "G-WK73P80071"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const microsoftProvider = new OAuthProvider('microsoft.com');
export const appleProvider = new OAuthProvider('apple.com');
googleProvider.setCustomParameters({
  prompt: 'select_account' 
});