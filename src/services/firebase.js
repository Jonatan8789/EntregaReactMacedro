// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8MzsCrMkvQB1pKQ51dpS1RPzL3PxWMEI",
  authDomain: "e-commerce-macedro.firebaseapp.com",
  projectId: "e-commerce-macedro",
  storageBucket: "e-commerce-macedro.firebasestorage.app",
  messagingSenderId: "371705531692",
  appId: "1:371705531692:web:ea15682d8cfdf6eff33089",
  measurementId: "G-SRNJNY6J0D"
};

const app = initializeApp(firebaseConfig);

// 👇 ESTE EXPORT ES EL QUE FALTABA
export const db = getFirestore(app);