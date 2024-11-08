const title = document.getElementById("title");
const body = document.getElementById("body");
const image = document.getElementById("image");

// print post to html

const currentTitle = document.getElementById("currentTitle");
const currentBody = document.getElementById("currentBody");
const currentImage = document.getElementById("currentImg");
let postID = "";
let array = JSON.parse(localStorage.getItem("tmpKey"));
let url = location.search;

window.onload = (event) => {
    for (var i = 0; i < array.length; i++){ 
        if (url === "?" + array[i].title){
            postID = i;
        }
    }
    displayPost();
  };

// Button functions 
document.getElementById("update-btn").addEventListener("click", updatePost);
document.getElementById("delete-btn").addEventListener("click", deletePost);

function displayPost() {
        currentTitle.innerHTML =  array[postID].title;
        currentBody.innerHTML =  array[postID].body;
        currentImage.innerHTML =  array[postID].image;
    } 

function updatePost(){
    if (title.value.length > 0){
        array[postID].title = title.value;
    }
    if (body.value.length > 0){
        array[postID].body = body.value;
    }
    if (image.value){
        array[postID].image = image.value;  
    }
    localStorage.setItem("tmpKey", JSON.stringify(array));
}

function deletePost(){
    console.log(postID);
    array.splice(postID, 1);
    localStorage.setItem("tmpKey", JSON.stringify(array));
}