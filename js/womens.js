window.addEventListener("load", function(){
    console.log("I am here")
});

document.querySelector("#small").addEventListener("click", function(){
    console.log("I am in small")
    bd = document.querySelector("body")
    bd.style.fontSize = ".5em"
});

document.querySelector("#medium").addEventListener("click", function(){
    console.log("I am in medium");
    bd = document.querySelector("body")
    bd.style.fontSize = "1em"
});

document.querySelector("#large").addEventListener("click", function(){
    console.log("I am in large")
    bd = document.querySelector("body")
    bd.style.fontSize = "2em"
})

document.querySelector("#color").addEventListener("click", function(){
    console.log("I am in dark mode")
    bd = document.querySelector("body")
    bd.classList.toggle("scheme2")
})

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

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

