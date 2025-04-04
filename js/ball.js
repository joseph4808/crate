const ball = document.createElement("div");
var ballRadius = 70
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;


createBall();

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
