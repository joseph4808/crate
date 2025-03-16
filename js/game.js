const button = ["", "", "", ""];
const text = document.querySelector(".text");
const numbers = [0, 0, 0, 0];
const numberLog = [];

let btnIncrement = 0;
let btnIncrementTwo = 0;

button.forEach((buttons)=>{
    const number = document.getElementById(`${++btnIncrement}btn`)
    buttons = number;
});

numbers.forEach((num)=>{
    num = getRndInteger(1, 9);
})






function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function buttonPress(btn){
    
}
