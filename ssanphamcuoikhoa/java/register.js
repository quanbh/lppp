import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { auth } from "./firebase.js";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); //Ngăn chặn hành vi mặc định của biểu mẫu sử dụng 

  document.querySelector("button[type=submit]").innerText = "Sign Up...";
//Lấy giá trị của tên người dùng, email và mật khẩu từ các trường nhập liệu trong biểu mẫu.
  document
    .querySelector("button[type=submit]")
    .setAttribute("disabled", "true");
  const username = form.username.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  createUserWithEmailAndPassword(auth, email, password) ///tạo người dùng mới bằng email và mật khẩu.
    .then(async (userCredential) =>/*chứa thông tin của người dùng.*/ {
      const user = userCredential.user;
      console.log(user);
      await sendEmailVerification(user); //Gửi email xác minh cho người dùng 
      await updateProfile(auth.currentUser, /* Cập nhật thông tin hồ sơ người dùng */ {
        displayName: username,
        photoURL: `https://avatars.dicebear.com/api/initials/${encodeURIComponent(
          username
        )}.svg`,
      });
      alert("Please verify your email");
      location.href = "./login.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorCode);
    })
    .finally(() => {
      document.querySelector("button[type=submit]").innerText = "Sign Up";
      document.querySelector("button[type=submit]").removeAttribute("disabled");
    });
});