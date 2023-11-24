const dugme = document.querySelector("button");

dugme.addEventListener("click", () => {


    if(localStorage.getItem("theme") === "dark"){
        localStorage.removeItem("theme");
        document.body.classList.toggle("dark");
    }
    else {
  localStorage.setItem("theme", "dark");
  document.body.classList.toggle("dark");
    }
});
window.addEventListener("load", () => {
    
    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.toggle("dark");
    }
    

})
