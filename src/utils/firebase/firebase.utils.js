// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDBUUiECcHkmv7MkRSZiMea7n43XEKybYE",

  authDomain: "crwn-clothing-db-d5dce.firebaseapp.com",

  projectId: "crwn-clothing-db-d5dce",

  storageBucket: "crwn-clothing-db-d5dce.appspot.com",

  messagingSenderId: "629253024410",

  appId: "1:629253024410:web:328692963c931ba1a74d23"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
