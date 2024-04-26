import { db, auth } from "./firebase.js";
import {
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { products } from "./data.js";
import {
  getDoc,
  doc,
  setDoc,
  updateDoc,
  increment,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

window.handleSignOut = () => signOut(auth);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    document.querySelector("#action-section").innerHTML =  `
    <a href="./login.html" style="white-space: nowrap" class="btn btn-primary">Login</a>
    <a href="./register.html" style="white-space: nowrap" class="btn btn-primary">Register</a>
  `;
  } else {
    document.querySelector("#action-section").innerHTML =  `
    <a href="./cart.html"><i class="fas fa-shopping-cart"></i></a>
    <img style="width: 30px; height: 30px; border-radius: 999px; display: inline" src="https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(
      user.displayName
    )}" />
    <a href="javascript:;" style="display: inline-block" class="btn btn-primary" onclick="window.handleSignOut()">Logout</a>
  `;
  }
});



