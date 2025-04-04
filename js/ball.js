const ball = document.createElement("div");
const ballRadius = 70
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
let ballXPosition = (windowWidth/2) - ballRadius;
let ballSpeed = 10;
let ballXDirection = 1;
var ballYDirection = 1;
var ballYPosition = (windowHeight/2) - ballRadius;


createBall();
setInterval(moveBall, 50);

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
    ballXPosition += ballSpeed * ballXDirection;
    ball.style.left = `${ballXPosition}px`;
    if(ballXPosition >= (windowWidth * .995) -(ballRadius * 2) || ballXPosition <= 0){
        ballXDirection *= -1;
    }

    ballYPosition += ballSpeed * ballYDirection;
    ball.style.top = `${ballYPosition}px`;
    if(ballYPosition >= (windowHeight * .99) -(ballRadius * 2) || ballYPosition <= 0){
        ballYDirection *= -1;
    }

}

