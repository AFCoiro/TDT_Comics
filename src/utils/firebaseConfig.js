import { getFirestore } from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA93GcMhwsl-iyyfC5-ilOQmRRPjqrreB0",
  authDomain: "tdt-afc.firebaseapp.com",
  projectId: "tdt-afc",
  storageBucket: "tdt-afc.firebasestorage.app",
  messagingSenderId: "728228271537",
  appId: "1:728228271537:web:849d8087045a71d0a89990"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;