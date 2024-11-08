const list  = document.getElementById("posts");
const title = document.getElementById("title");
const body = document.getElementById("body");
const image = document.getElementById("image");

// print post titles to html
window.onload = (event) => {
    let x = JSON.parse(localStorage.getItem("tmpKey"));
    list.innerHTML = " ";
    x.forEach(post => {
        list.innerHTML += `<li><a href='post.html?title='${post.title}> ${post.title} </a></li>`});
  };

// Constructor Function for post object
function post(title, body, image){
    this.title = title;
    this.body = body;
    this.image = image;
};


// Button functions 
document.getElementById("save-btn").addEventListener("click", savePost);
// document.getElementById("clear-btn").addEventListener("click", clearPost);

let tmpArray = localStorage.getItem("tmpKey") ? JSON.parse(localStorage.getItem("tmpKey")) : [];
// Save post to local storage
function savePost() {
    const newPost = new post(title.value, body.value, image.value);
    tmpArray.push(newPost);
    localStorage.setItem("tmpKey", JSON.stringify(tmpArray));
} 