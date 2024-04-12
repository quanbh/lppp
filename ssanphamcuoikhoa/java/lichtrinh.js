document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').files[0];
    const reader = new FileReader();
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
  });
  
var mybutton = document.getElementById("backToTopBtn");


window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}