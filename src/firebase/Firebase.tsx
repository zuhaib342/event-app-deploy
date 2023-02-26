import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";



// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCu99mqUBc_7VocK4zYslwrVJwW9ZSW5DU",
    authDomain: "event-planner-app-625f9.firebaseapp.com",
    projectId: "event-planner-app-625f9",
    storageBucket: "event-planner-app-625f9.appspot.com",
    messagingSenderId: "649391622304",
    appId: "1:649391622304:web:3d652aee3f8c2149f3e1c5",
    measurementId: "G-E0PKV1LJER"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {db,storage, auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged}
