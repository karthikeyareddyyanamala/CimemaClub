//Navigation
const menu = document.querySelector(".big-wrapper");

const navbartoggle= document.querySelector(".Navbar2");


menu.addEventListener("click", ()=> {
    navbartoggle.classList.toggle("active");
});


//---------------------------------------Nav End-----------------------------------------------//

//------------------------Home Link Button -------------------------------------------->

const home_button = document.querySelector(".HomeButton");

home_button.addEventListener("click", ()=>{
    location.href="./index.html";
})

//------------------------------------------------------------------------------------->