const ball = document.createElement("div");

createBall();

function createBall(){
    document.body.appendChild(ball)
    ball.style.height = "100px"
    ball.style.width = "100px"
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "lightgreen"
}
