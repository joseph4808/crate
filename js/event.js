const button1 = document.getElementById("element1");
const button2 = document.getElementById("element2");
const button3 = document.getElementById("element3");
const button4 = document.getElementById("element4");
const button5 = document.getElementById("element5");

let positionY = 0;
let positionX = 0;
let movement = 16;

button1.addEventListener("click", ()=>{
    button1.innerHTML = "<h6><ul> <li>Hi</li> <li>Hello</li> </ul></h6> <p>Click Twice!</p>"
})

button1.addEventListener("dblclick", ()=>{
    button1.innerHTML = "<h6><ul> <li>Goodbye</li> <li>Bye</li> </ul></h6> <p>Click Once!</p>"
})

button2.addEventListener("mouseover", ()=>{
    button2.style.color = "black"
    button2.style.backgroundImage = "linear-gradient(0deg, rgb(200, 200, 250), rgb(180, 230, 180))"
})

button2.addEventListener("mouseout", ()=>{
    button2.style.color = "white"
    button2.style.backgroundImage = "linear-gradient(0deg, rgb(50, 50, 130), rgb(200,240,200))"
})

document.addEventListener("keyup", (event)=>{
    console.log(event.key);
    if(event.key == "ArrowUp"){
        positionY -= movement;
    }
    if(event.key == "ArrowDown"){
        positionY += movement;
    }
    if(event.key == "ArrowRight"){
        positionX -= movement;
    }
    if(event.key == "ArrowLeft"){
        positionX += movement;
    }
    button3.style.right = `${positionX}px`;
    button3.style.top = `${positionY}px`;
})

button4.addEventListener("click", ()=>{
    button4.style.width = "10px";
    button4.style.height = "10px";
    button4.innerHTML = "";
    button4.style.opacity = "0.3";
})


document.addEventListener("keyup", (event)=>{
    if(event.key == "j"){
    button4.style.width = "300px";
    button4.style.height = "50px";
    button4.innerHTML = "<h4>Click me to make me small <br> Press &quotj&quot to bring me back</h4>";
    button4.style.opacity = "1";
    }
})

const list = ["running", "paused"];
let index = 0
button5.addEventListener("click", ()=>{
    button5.style.animationPlayState = list[index];
    index = (index + 1)%2
})

