const button = ["", "", "", ""];
const text = document.querySelector(".text");
const numbers = [0, 0, 0, 0];
const numberLog = [];

let btnIncrement = 0;
let btnIncrementTwo = 0;

numberChange();

button.forEach((buttons)=>{
    const number = document.getElementById(`btn${++btnIncrement}`)
    buttons = number;
    buttons.innerHTML = numbers[btnIncrement - 1];
});


buttonPress(0)
buttonPress(1)
buttonPress(2)
buttonPress(3)





function numberChange(){
    numbers.forEach((num)=>{
        num = getRndInteger(1, 9);
    });
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function buttonPress(btn){

    button[btn].addEventListener(()=>{
        numberLog.push(numbers[btn]);
        numberChange();
        button.forEach((button)=>{
            button.innerHTML = numbers[btnIncrementTwo++]
        });
        btnIncrementTwo = 0;
    });
}
