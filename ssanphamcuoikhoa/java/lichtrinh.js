document.getElementById('post-form').addEventListener('submit', function(event) {
     event.preventDefault();               //Ngăn chặn hành vi mặc định của biểu mẫu sử dụng 
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').files[0];
    // Lấy các giá trị từ các trường nhập liệu
    const reader = new FileReader();
    // Tạo một đối tượng FileReader để đọc tệp hình ảnh.
    reader.onload = function(event) {
      const imageUrl = event.target.result;
      const postList = document.getElementById('post-list');
      const postDiv = document.createElement('div');
      postDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <img src="${imageUrl}" alt="Posted Image">
      `;
      postList.appendChild(postDiv);
    };
    reader.readAsDataURL(image);
    document.getElementById('post-form').reset();
    // làm sạch biểu mẫu bằng cách sử dụng 
  });
  
var  mybutton = document.getElementById("backToTopBtn");


