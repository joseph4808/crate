const search = document.querySelector(".searchInput");
const button = document.querySelector(".searchButton");
const div = document.querySelector(".searchDiv");


button.addEventListener("click", ()=>{
    div.classList.toggle("active");
})
