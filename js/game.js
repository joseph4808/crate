const button = ["", "", "", ""];
const text = document.querySelector(".text");

let btnIncrement = 0;
let btnIncrementTwo = 0;
let numbers = [0, 0, 0, 0];
let numberLog = [];

button.forEach((buttons)=>{
    const number = document.getElementById(`btn${++btnIncrement}`)
    buttons = number;
    numbers[btnIncrement-1] = getRndInteger(1, 9);
    buttons.innerHTML = numbers[btnIncrement-1];
    buttons.addEventListener("click", ()=>{
        numberLog.push(numbers[parseInt(buttons - "btn")-1]);
        changeNumbers();
        })
    })
});





function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



function changeNumbers(){
    button.forEach((btn)=>{
        numbers[btnIncrementTwo] = getRndInteger(1, 9);
        btn.innerHTML = numbers[btnIncrementTwo];
        btnIncrementTwo++;
    }
}
