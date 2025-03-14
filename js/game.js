const button = ["", "", "", ""];
const text = document.querySelector(".text");

let btnIncrement = 0;
let btnIncrementTwo = 0;
let numbers = [0, 0, 0, 0]
let numLog = [];

button.forEach((buttons)=>{
    const number = document.getElementById(`btn${++btnIncrement}`)
    buttons = number;
    numbers[btnIncrement-1] = getRndInteger(1, 9);
    buttons.innerHTML = numbers[btnIncrement-1];
    number.addEventListener("click", ()=>{
        numLog.push(numbers[parseInt(number)-1]);
        text.innerHTML = numlog;
        button.forEach((btn)=>{
            numbers[btnIncrementTwo] = getRndInteger(1, 9);
            btn.innerHTML = numbers[btnIncrementTwo++];
        })
    })
});


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


