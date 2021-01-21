var main = document.querySelector(".main-container"); 
var logo = document.querySelector(".navbar-logo"); 
var navwrap = document.querySelector(".nav-wrapper"); 
var navele = document.querySelector("navbar-elements");
var footer = document.querySelector(".footer"); 
var label =  document.querySelector(".navlable"); 
let show = "true";




const disable=()=>{
     
    if (show ==="true"){
      
        console.log("yo yo working here");
        main.style.display = "none";
        logo.style.visibility = "hidden";
        footer.style.display = "none";
        label.innerHTML="&#10006;"
        show = "false";

    }else{
        console.log("yo yo nah"); 
        main.style.display = "flex";
        logo.style.visibility = "visible";
        footer.style.display = "block";
        label.innerHTML="&#9776;"
        show = "true" ;
    }
   
}