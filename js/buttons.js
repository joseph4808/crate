const buttons = document.querySelectorAll(".button");

let num1 = 0;
let color1 = "white";

buttons.forEach(button => {
    button.addListener("click", ()=>{
        changeColor();
    })
})

function changeColor(){
    num1++;
    switch(num1){
        case 1:
            color1 = "red";
            break;
        case 2:
            color1 = "blue";
            break;
        case 3:
            color1 = "green";
            num1 = 0;
            break;
    }
    tLButton.style.background = color1;
}


