const tLButton = document.querySelector(".tbOne");
const tRButton = document.querySelector(".tbTwo");
const bLButton = document.querySelector(".bbOne");
const bRButton = document.querySelector(".bbTwo");

let num1 = 0;
let color1 = "white";

tLButton.onclick = changeColor(num1, color1);

function changeColor(num, color){
    num++;
    switch(num){
        case 1:
            color = "red";
            break;
        case 2:
            color = "blue";
            break;
        case 3:
            color = "green";
            num = 0;
            break;
    }
    tLButton.style.background = color;
}
