const screens = document.querySelectorAll(".screen");
const chooseInsectBtns = document.querySelectorAll(".choose-insect-btn");
const gameContainer = document.getElementById("game-container");
const startBtn =  document.getElementById("start-btn");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");

let seconds = 0;
let score = 0;
let selectedInsect = {}

startBtn.addEventListener("click", ()=>{
    screens[0].classList.add("up")
})




