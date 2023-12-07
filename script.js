console.log("Hello world");

function showPopup(){
    alert("Hej hej");
}

const btnToggle = document.getElementById("changeText")
const btnToggle2 = document.getElementById("button-change")

function changeText(){
    btnToggle.innerHTML = "";
    btnToggle2.innerHTML= "bajbaj";
}

const btn = document.getElementById("button-background");

function changeBackground(){
    btn.classList.toggle("newbackground")
}