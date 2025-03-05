const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display")
const buttonDiv = document.querySelector(".buttons")

var num = [getRndInteger(1, 5), getRndInteger(1, 5), getRndInteger(1, 5), getRndInteger(1, 5)];
var color = ["white", "white", "white", "white"];
var displayCount = 0;

changeColor(0, 0, buttons[0])
changeColor(1, 1, buttons[1])
changeColor(2, 2, buttons[2])
changeColor(3, 3, buttons[3])

buttons[0].addEventListener("click", ()=>{
    changeColor(1, 1, buttons[1]);
    updateDisplay()
})
buttons[1].addEventListener("click", ()=>{
    changeColor(2, 2, buttons[2]);
    changeColor(0, 0, buttons[0]);
    updateDisplay()
})
buttons[2].addEventListener("click", ()=>{
    changeColor(3, 3, buttons[3]);
    changeColor(1, 1, buttons[1]);
    updateDisplay()
})
buttons[3].addEventListener("click", ()=>{
    changeColor(2, 2, buttons[2]);
    updateDisplay()
})


function changeColor(numm, colorr, button){
    switch(num[numm]){
        case 1:
            color[colorr] = "red";
            break;
        case 2:
            color[colorr] = "blue";
            break;
        case 3:
            color[colorr] = "green";
            break;
        case 4:
            color[colorr] = "pink";
            break;
        case 5:
            color[colorr] = "cyan";
    }
    if(num[numm] == 5){
        num[numm] = 1;
    } else{
        num[numm]++;
    }

    button.style.backgroundColor = `${color[colorr]}`;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function updateDisplay(){
    displayCount++;
    display.innerText = `Clicks: ${displayCount}`;
}
