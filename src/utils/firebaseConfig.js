import { getFirestore } from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6YERkfenGwdKFGPLezLmfHDljjh65MUQ",
  authDomain: "afc-app-2a82e.firebaseapp.com",
  projectId: "afc-app-2a82e",
  storageBucket: "afc-app-2a82e.appspot.com",
  messagingSenderId: "398695986883",
  appId: "1:398695986883:web:37b01027c30fcced459476"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;