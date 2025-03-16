const button = ["", "", "", ""];
const text = document.querySelector(".text");

let btnIncrement = 0;
let btnIncrementTwo = 0;
let numbers = [0, 0, 0, 0];
let numberLog = [];

button.forEach((buttons)=>{
    const number = document.getElementById(`${++btnIncrement}btn`)
    buttons = number;
    });





function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
