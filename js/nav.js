const nav = document.querySelector(".nav");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 60){
        nav.classList.add("active");
    } else {
        nav.classList.remove("active")
    }
})
