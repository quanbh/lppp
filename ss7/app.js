import{addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
}  from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHpiZh8guXFK1nKSd1WIEaBNivNiCcoRw",
  authDomain: "nps-jsi-327a3.firebaseapp.com",
  projectId: "nps-jsi-327a3",
  storageBucket: "nps-jsi-327a3.appspot.com",
  messagingSenderId: "548696365910",
  appId: "1:548696365910:web:8c7d6a7b52f942ace154f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")


// Import the functions you need from the SDKs you need





///// Xây dựng các hàm phù hợp
// Function to render tasks
function renderTasks(tasks) {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.innerHTML = `
              <span>${task.description}</span>
              <button class="deleteBtn" data-id="${task.id}">Xóa</button>
          `};
      taskList.appendChild(li);
  
  //// Hàm render tasks
  function renderTasks(tasks){
  
      // Add event listener to delete button
      const deleteBtn = li.querySelector(".deleteBtn");
      deleteBtn.addEventListener("click", () => {
        deleteTask(task.id); /// Hàm xóa task
      });
    };
  }
  
  //// Hàm cập nhật dữ liệu mới nhất trên db
  // Hàm cập nhật dữ liệu mới nhất trên db
  const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const tasks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      description: doc.data().description,
    }));
    renderTasks(tasks); /// Cập nhật lại giao diện
  };
  
  //// Hàm thêm 1 task vào CSDL
  // Function to add a task to Firestore
  const addTask = async (description) => {
    await addDoc(collection(db, "tasks"), { description });
    getTasks(); // Lấy dữ liệu mới nhất từ DB về web
    getTasks(); /// Lấy dữ liệu mới nhất từ Database về web.
    taskInput.value = "";
  };
  
  //// Hàm xóa dữ liệu khi bấm nút X
  //// Hàm xóa dữ liệu khi bấm nút delete
  const deleteTask = (id) => {
    const docRef = doc(db, "tasks", id);
  
    deleteDoc(docRef)
      .then(() => {
        console.log("Entire Document has been deleted successfully.");
        getTasks(); /// Lấy dữ liệu mới nhất từ Database về web.
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  //// Hàm lắng nghe sự kiện khi người dùng click chuột vào nút thêm Task.
  // Lắng nghe sự kiện khi người dùng lick vào nút thêm task => gọi hàm thêm task vào database
  addTaskBtn.addEventListener("click", () => {
    const description = taskInput.value.trim();
    if (description !== "") {
      addTask(description); /// Thêm mới 1 task vào cơ sở dữ liệu
      addTask(description);
    }
  });
  
  // Gọi hàm lấy dữ liệu mới nhất từ database
  getTasks();