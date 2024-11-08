// print post to html

const currentTitle = document.getElementById("currentTitle");
const currentBody = document.getElementById("currentBody");
const currentImage = document.getElementById("currentImage");

window.onload = (event) => {
    displayPost();
  };

function displayPost() {
        let x = location.search;
        let y = JSON.parse(localStorage.getItem("tmpKey"));
    for (var i = 0; i < y.length; i++){ 
        if (x === "?" + y[i].title){
            currentTitle.innerHTML =  y[i].title;
            currentBody.innerHTML =  y[i].body;
            currentImage.innerHTML =  y[i].image;
            console.log("test good")
            break;
        } else {currentTitle.innerHTML = "bad test";
            console.log("test bad")
        }
    }
}