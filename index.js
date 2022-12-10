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
try{
    const home_signup_button = document.querySelector(".Button-Signup");

home_signup_button.addEventListener("click", ()=>{
    signup_form.classList.toggle("form-active");
})
}
catch(err){

}

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
//----------------------------Rating Logic-------------------------------------------------------

try{
const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className===starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}
executeRating(ratingStars);
}
catch(err){

}
//--------------------------------Rating overlay open and close------------------------------------------------------------

const feedback_button = document.querySelector(".FeedBack");

const feedback_overlay = document.querySelector(".feedback_rating");
try{
    feedback_button.addEventListener("click",()=>{
        feedback_overlay.classList.toggle("feedback_rating_active");
    })
}
catch(err){

}

const feedback_submit_button = document.querySelector(".feedback-button");
try{feedback_submit_button.addEventListener("click",()=>{
    feedback_overlay.classList.toggle("feedback_rating_active");
})}
catch(err){
    
}
