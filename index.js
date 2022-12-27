const mobile_nav= document.querySelector(".mobile-navbar-btn");
const nav_bar = document.querySelector(".header")

const togglenavbar=()=>{
  //alert("hii")
  nav_bar.classList.toggle("active")
  }


mobile_nav.addEventListener("click" , function(){
    togglenavbar()
})