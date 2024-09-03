// pong.js

const canvas = document.getElementById('pongCanvas');
const context = canvas.getContext('2d');

// Create the paddle
const paddleWidth = 10, paddleHeight = 100;
const player = { x: 0, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight, dy: 4 };
const ai = { x: canvas.width - paddleWidth, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight, dy: 4 };

// Create the ball
const ball = { x: canvas.width / 2, y: canvas.height / 2, radius: 10, dx: 4, dy: 4 };

// Draw the paddles and the ball
function drawRect(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
}

function movePaddle(paddle, dy) {
    paddle.y += dy;
    if (paddle.y < 0) {
        paddle.y = 0;
    } else if (paddle.y + paddle.height > canvas.height) {
        paddle.y = canvas.height - paddle.height;
    }
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx *= -1; // Reverse direction
}

function update() {
    // Move the player paddle
    if (upPressed && !downPressed) {
        movePaddle(player, -player.dy);
    } else if (downPressed && !upPressed) {
        movePaddle(player, player.dy);
    }

    // Move the AI paddle
    if (ball.y < ai.y + ai.height / 2) {
        movePaddle(ai, -ai.dy);
    } else if (ball.y > ai.y + ai.height / 2) {
        movePaddle(ai, ai.dy);
    }

    // Move the ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Ball collision with top and bottom walls
    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.dy *= -1;
    }

    // Ball collision with paddles
    if (ball.x - ball.radius < player.x + player.width && ball.y > player.y && ball.y < player.y + player.height) {
        ball.dx *= -1;
    } else if (ball.x + ball.radius > ai.x && ball.y > ai.y && ball.y < ai.y + ai.height) {
        ball.dx *= -1;
    }

    // Check for scoring
    if (ball.x - ball.radius < 0) {
        resetBall(); // AI scores
    } else if (ball.x + ball.radius > canvas.width) {
        resetBall(); // Player scores
    }
}

function render() {
    // Clear the canvas
    drawRect(0, 0, canvas.width, canvas.height, '#000');

    // Draw the paddles
    drawRect(player.x, player.y, player.width, player.height, '#fff');
    drawRect(ai.x, ai.y, ai.width, ai.height, '#fff');

    // Draw the ball
    drawCircle(ball.x, ball.y, ball.radius, '#fff');
}

function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

let upPressed = false;
let downPressed = false;

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            upPressed = true;
            break;
        case 'ArrowDown':
            downPressed = true;
            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            upPressed = false;
            break;
        case 'ArrowDown':
            downPressed = false;
            break;
    }
});

gameLoop();
