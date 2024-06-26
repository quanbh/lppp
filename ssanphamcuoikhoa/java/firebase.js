
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";


const  firebaseConfig = {
  apiKey: "AIzaSyAHpiZh8guXFK1nKSd1WIEaBNivNiCcoRw",
  authDomain: "nps-jsi-327a3.firebaseapp.com",
  projectId: "nps-jsi-327a3",
  storageBucket: "nps-jsi-327a3.appspot.com",
  messagingSenderId: "548696365910",
  appId: "1:548696365910:web:8c7d6a7b52f942ace154f7"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);