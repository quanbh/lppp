import {
    signInWithEmailAndPassword,
    signOut,
  } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
  import { auth } from "./firebase.js";
  
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    document.querySelector("button[type=submit]").innerText = "Sign In...";
  
    document
      .querySelector("button[type=submit]")
      .setAttribute("disabled", "true");
  
    const email = form.email.value.trim();
    const password = form.password.value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if (!user.emailVerified) {
          signOut(auth);
          throw { code: "Email not verified", message: "" };
        }
        location.href = "./index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorCode);
      })
      .finally(() => {
        document.querySelector("button[type=submit]").innerText = "Sign In";
        document.querySelector("button[type=submit]").removeAttribute("disabled");
      });
  });