import {
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { auth } from "./firebase.js";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Ngăn chặn hành vi mặc định của biểu mẫu sử dụng 
  document.querySelector("button[type=submit]").innerText = "Sign In...";

  document
    .querySelector("button[type=submit]")
    .setAttribute("disabled", "true");

  const email = form.email.value.trim();
  const password = form.password.value;

  signInWithEmailAndPassword(auth, email, password) //ể đăng nhập người dùng bằng email và mật khẩu.
    .then((userCredential) => { ///chứa thông tin của người dùng.
      const user = userCredential.user;
      console.log(user);
      if (!user.emailVerified) /*Kiểm tra nếu email của người dùng chưa được xác minh*/ {
        signOut(auth);
        throw { code: "Email not verified", message: "" };
      }
      location.href = "../html/trangchu.html";
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