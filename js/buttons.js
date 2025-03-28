const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display")
const buttonDiv = document.querySelector(".buttons")
const completeDis = document.querySelector(".complete")
const yay = document.querySelector(".yay")


var num = [getRndInteger(1, 5), getRndInteger(1, 5), getRndInteger(1, 5), getRndInteger(1, 5)];
var color = ["white", "white", "white", "white"];
var displayCount = 0;
var colorId = [0, 0, 0, 0];

changeColor(0, 0, buttons[0], 0);
changeColor(1, 1, buttons[1], 1);
changeColor(2, 2, buttons[2], 2);
changeColor(3, 3, buttons[3], 3);

buttons[0].addEventListener("click", ()=>{
    colorChangeCondensed(1);
    updateDisplay();
    if(returnGameComplete() == true){
        gameComplete();
    }
})
buttons[1].addEventListener("click", ()=>{
    colorChangeCondensed(2);
    colorChangeCondensed(0);
    updateDisplay();
    if(returnGameComplete() == true){
        gameComplete();
    }
})
buttons[2].addEventListener("click", ()=>{
    colorChangeCondensed(3);
    colorChangeCondensed(1);
    updateDisplay();
    if(returnGameComplete() == true){
        gameComplete();
    }
})
buttons[3].addEventListener("click", ()=>{
    colorChangeCondensed(2);
    updateDisplay();
    if(returnGameComplete() == true){
        gameComplete();
    }
})


function changeColor(numm, colorr, button, id){
    switch(num[numm]){
        case 1:
            color[colorr] = "red";
            colorId[id] = 1;
            break;
        case 2:
            color[colorr] = "blue";
            colorId[id] = 2;
            break;
        case 3:
            color[colorr] = "green";
            colorId[id] = 3;
            break;
        case 4:
            color[colorr] = "pink";
            colorId[id] = 4;
            break;
        case 5:
            color[colorr] = "cyan";
            colorId[id] = 5;
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

function returnGameComplete(){
    return(((colorId[0]+colorId[1]+colorId[2]+colorId[3])/colorId[0] == 4) && ((colorId[0]+colorId[1]+colorId[2]+colorId[3])/colorId[1] == 4) && ((colorId[0]+colorId[1]+colorId[2]+colorId[3])/colorId[2] == 4) && ((colorId[0]+colorId[1]+colorId[2]+colorId[3])/colorId[3] == 4));
}

function gameComplete(){
    completeDis.style.zIndex = "100";
    completeDis.style.height = "80vh";
    completeDis.style.width = "80vw";
    completeDis.style.opacity = ".8";
    yay.innerHTML = "YOU DID IT!!!!!";
    yay.style.opacity = 1;
    yay.style.top = "50px";
    yay.style.left = "200px";
}

function colorChangeCondensed(number){
    var numTemp = number;
    changeColor(numTemp, numTemp, buttons[numTemp], numTemp)
}
