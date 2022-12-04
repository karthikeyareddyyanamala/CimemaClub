//Navigation
const menu = document.querySelector(".big-wrapper");

const navbartoggle= document.querySelector(".Navbar2");


menu.addEventListener("click", ()=> {
    navbartoggle.classList.toggle("active");
});


//---------------------------------------Nav End-----------------------------------------------//

//------------------------Home Link Button -------------------------------------------->
try{
    const home_button = document.querySelector(".HomeButton");

home_button.addEventListener("click", ()=>{
    location.href="./index.html";
})
}
catch(err){
    const login = document.querySelector(".LoginButton");

    let login_form = document.querySelector(".Login-form");

    login.addEventListener("click", ()=>{
    login_form.classList.toggle("login-active");
})
}


//----------------------------Signup overlay--------------------------------------------------------->
const signup = document.querySelector(".Button-Signup-nav");
const signup_form = document.querySelector(".singup-form") 

signup.addEventListener("click", ()=>{
    signup_form.classList.toggle("form-active");
})


const close_signup = document.querySelector(".close-button");

close_signup.addEventListener("click", ()=>{
    signup_form.classList.remove("form-active")
})
//---------------------------------END------------------------------------------------------------------



const close_login = document.querySelector(".login-close-button");
const login_form = document.querySelector(".Login-form");

close_login.addEventListener("click", ()=>{
    login_form.classList.remove("login-active");
})

//----------------------------------------------------------------------------------------

const signuplink_overlay = document.querySelector(".Signuplink-overlay");

signuplink_overlay.addEventListener("click", ()=>{
    signup_form.classList.toggle("form-active");
})

const Loginlink_overlay = document.querySelector(".Loginlink-overlay");
Loginlink_overlay.addEventListener("click", ()=>{
    login_form.classList.toggle("login-active");
})
//-----------------------------------------------------------------------------------
