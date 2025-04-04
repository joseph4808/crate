const ball = document.createElement("div");
const ballRadius = 70
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
let ballXPosition = (windowWidth/2) - ballRadius;
let ballSpeed = 6;
let ballXDirection = 1;


createBall();
setInterval(moveBall(), 100)

function createBall(){
    document.body.appendChild(ball)
    ball.style.height = `${ballRadius*2}px`
    ball.style.width = `${ballRadius*2}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "lightgreen"
    ball.style.position= "absolute"
    ball.style.top = `${(windowHeight/2) - ballRadius}px`;
    ball.style.left = `${(windowWidth/2) - ballRadius}px`;
}



function moveBall(){

    ballXPosition =+ ballSpeed * ballXDirection;
    ball.style.left = `${ballXPosition}px`;
    if(ballXPosition > windowWidth -(ballRadius * 2)){
        ballDirection = -1;
    }

}

function ballLeft(num){
    ball.style.left = `${(windowWidth/2) - ballRadius + num}px`;

}

