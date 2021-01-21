var main = document.querySelector(".main-container"); 
var logo = document.querySelector(".navbar-logo"); 
var navwrap = document.querySelector(".nav-wrapper"); 
var footer = document.querySelector(".footer"); 
var label =  document.querySelector(".navlable"); 
let show = "true";


const disable=()=>{
    

    if (show ==="true"){
      
        console.log("yo yo working here");
        main.style.display = "none";
        navwrap.style.display = "block";
        logo.style.visibility = "hidden";
        footer.style.display = "none";
        label.innerHTML="&#10006;"
        show = "false";

    }else{
        console.log("yo yo nah"); 
        main.style.display = "block";
        navwrap.style.display = "none";
        logo.style.visibility = "visible";
        footer.style.display = "block";
        label.innerHTML="&#9776;"
        show = "true" ;
    }
   
}