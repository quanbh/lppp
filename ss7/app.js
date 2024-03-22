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


//////xây dựng các hàm




////hàm render tasks




///////hàm cập nhật 
const getTasks = async ()=>{
    const querySnapshot = await getDocs(collection(db,"tasks"));
    const tasks = querySnapshot.docs.map((doc)=>{
        id: doc.id;
        description: doc.data().description;
    });
    renderTasks(tasks);
    function renderTasks(tasks){
        
    }
};










////////hàm thêm 1 task vào CSDL
const addTask = async ()=>{
    await addDoc(collection(db,"tasks"),{description})
    getTasks(); //////lấy dữ liệu mới nhất 
    taskInput.value ="";
}






//////hàm xóa dữ liêu jkhi bấm nút X











//////hàm lắng nghe sự kiện
addTaskBtn.addEventListener("click",()=>{
    const description = taskInput.ariaValueMax.trim();
    if(description !== ""){
        addTask(description);
    }
})
getTasks();











