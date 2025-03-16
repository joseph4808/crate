const button = ["btn1", "btn2", "btn3", "btn4"];
const text = document.querySelector(".text");
const numbers = [0, 0, 0, 0];
const numberLog = [];

let btnIncrement = 0;
let btnIncrementTwo = 0;

numberChange();

button.forEach((buttons)=>{
    const btn = document.getElementById(buttons);
    btn.innerHTML
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
    button[btn].addEventListener("click", ()=>{
        numberLog.push(numbers[btn]);
        numberChange();
        button.forEach((button)=>{
            button.innerHTML = numbers[btnIncrementTwo++]
        });
        btnIncrementTwo = 0;
    });
}
