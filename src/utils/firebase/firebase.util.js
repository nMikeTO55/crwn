import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtpFGAKcceF35yhF86jjQHDdLaJf1CgJE",
  authDomain: "crwn-db-b91ac.firebaseapp.com",
  projectId: "crwn-db-b91ac",
  storageBucket: "crwn-db-b91ac.firebasestorage.app",
  messagingSenderId: "1001000264563",
  appId: "1:1001000264563:web:20e00ab0d9a67794805b06",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
