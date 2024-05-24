// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { get } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyB0Isj7cvQzECDJnMgMrWfnEIparbjV16c",
    authDomain: "netflix-clone-b43dc.firebaseapp.com",
    projectId: "netflix-clone-b43dc",
    storageBucket: "netflix-clone-b43dc.appspot.com",
    messagingSenderId: "832598414033",
    appId: "1:832598414033:web:79ad899443ff7696ce2bf0",
    measurementId: "G-6DNYMHB2GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)