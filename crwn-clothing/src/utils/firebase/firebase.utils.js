import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCh_37GpaZDaacN8fb2Z3HPnm3d_DzXV9o",
  authDomain: "crwn-clothing-db-7a8d4.firebaseapp.com",
  projectId: "crwn-clothing-db-7a8d4",
  storageBucket: "crwn-clothing-db-7a8d4.appspot.com",
  messagingSenderId: "14388616720",
  appId: "1:14388616720:web:c423c5ccb2063d26b73495",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
