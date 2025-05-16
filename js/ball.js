const ball = document.createElement("div");
const ballRadius = 70
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const switcher = document.createElement("div");
const switchWidth = 60;
let ballXPosition = (windowWidth/2) - ballRadius;
let ballSpeed = 10;
let ballXDirection = 1;
var ballYDirection = 1;
var ballYPosition = (windowHeight/2) - ballRadius;
var switchPositionX = (windowWidth/2) - (switchWidth/2);
var runningInterval = false;
var switchSpeed = 8;
var intervalSpeed = 10;




createBall();
createSwitch();
controlSwitch();
setInterval(moveBall, 50);

function createBall(){
    document.body.appendChild(ball)
    ball.style.height = `${ballRadius*2}px`
    ball.style.width = `${ballRadius*2}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "lightgreen"
    ball.style.position= "absolute"
    ball.style.top = `${ballYPosition}px`;
    ball.style.left = `${ballXPosition}px`;
}

function createSwitch(){
    document.body.appendChild(switcher)
    switcher.style.height = "100vh"
    switcher.style.width = `${switchWidth}px`
    switcher.style.backgroundColor = "gray"
    switcher.style.position= "absolute"
    switcher.style.top = `0px`;
    switcher.style.left = `${switchPositionX}px`;
    switcher.style.opacity = 0.4;
}



function moveBall(){
    ballXPosition += ballSpeed * ballXDirection;
    ball.style.left = `${ballXPosition}px`;

    ballYPosition += ballSpeed * ballYDirection;
    ball.style.top = `${ballYPosition}px`;

    if(ballXPosition >= (windowWidth * .995) -(ballRadius * 2) || ballXPosition <= 0){
        ballXDirection *= -1;
    }
    if(ballYPosition >= (windowHeight * .99) -(ballRadius * 2) || ballYPosition <= 0){
        ballYDirection *= -1;
    }

}

function controlSwitch(){
    document.addEventListener("keydown", (key)=>{
        if((key.key == 'ArrowLeft' || key.key == 'a') && runningInterval == false){
            var moveLeft = setInterval(moveSwitchLeft, intervalSpeed)
            runningInterval = true
        } else if((key.key == 'ArrowRight' || key.key == 'd') && runningInterval == false){
            var moveRight = setInterval(moveSwitchRight, intervalSpeed)
            runningInterval = true
        }
        document.addEventListener("keyup", (key)=>{
            if(key.key == 'ArrowLeft' || key.key == 'a'){
                clearInterval(moveLeft)
                runningInterval = false;
                document.removeEventListener("keyup", ()=>{})
            } else if(key.key == 'ArrowRight' || key.key == 'd'){
                clearInterval(moveRight)
                runningInterval = false;
                document.removeEventListener("keyup", ()=>{})
            }
        })
    })
}

document.addEventListener("keydown", (key)=>{
    console.log(key);
})

function moveSwitchLeft(){
    switchPositionX -= switchSpeed;
    switcher.style.left = `${switchPositionX}px`;
}

function moveSwitchRight(){
    switchPositionX += switchSpeed;
    switcher.style.left = `${switchPositionX}px`;
}

