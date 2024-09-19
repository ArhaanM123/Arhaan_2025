---
layout: page
title: Pong Game
description: Play Pong with Player vs Player or Player vs CPU
permalink: /pong/
---

{% include nav/home.html %}

# Pong Game 

## Instructions:
- **Player vs Player**: Use the **W/S** keys for the left paddle, and **Up/Down arrows** for the right paddle.
- **Player vs CPU**: Use **Up/Down arrows** to control the right paddle, while the CPU controls the left paddle.
- First player to reach 7 points wins!

<div id="gameContainer">
    <canvas id="pongGame" width="600" height="400"></canvas>
</div>

<h2>Score: <span id="player1Score">0</span> - <span id="player2Score">0</span></h2>

<!-- Game Mode Selection -->
<h3>Choose Game Mode:</h3>
<button onclick="startGame('PvP')">Player vs Player</button>
<button onclick="startGame('PvC')">Player vs CPU</button>

<script>
    const canvas = document.getElementById('pongGame');
    const ctx = canvas.getContext('2d');

    let paddleHeight = 75;
    let paddleWidth = 10;
    let rightPaddleY = (canvas.height - paddleHeight) / 2;
    let leftPaddleY = (canvas.height - paddleHeight) / 2;
    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;
    let ballSpeedX = 2;
    let ballSpeedY = 2;
    let rightPaddleSpeed = 0;
    let leftPaddleSpeed = 0;
    let player1Score = 0;
    let player2Score = 0;
    let isGameOver = false;
    let gameMode = 'PvP'; // Default to Player vs Player
    let isWaiting = false;

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);

    function startGame(mode) {
        gameMode = mode;
        resetGame();
        gameLoop();
    }

    function resetGame() {
        player1Score = 0;
        player2Score = 0;
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = 2;
        ballSpeedY = 2;
        isGameOver = false;
    }

    function gameLoop() {
        if (isGameOver) return;

        if (!isWaiting) {
            movePaddles();
            moveBall();
        }
        drawEverything();
        requestAnimationFrame(gameLoop);
    }

    function drawEverything() {
        // Background
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Paddles
        ctx.fillStyle = 'white';
        ctx.fillRect(10, leftPaddleY, paddleWidth, paddleHeight);
        ctx.fillRect(canvas.width - paddleWidth - 10, rightPaddleY, paddleWidth, paddleHeight);

        // Ball
        ctx.beginPath();
        ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();

        // Scoreboard
        document.getElementById("player1Score").innerText = player1Score;
        document.getElementById("player2Score").innerText = player2Score;
    }

    function moveBall() {
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        // Ball collision with top and bottom
        if (ballY < 0 || ballY > canvas.height) {
            ballSpeedY = -ballSpeedY;
        }

        // Ball collision with paddles
        if (ballX < 20 && ballY > leftPaddleY && ballY < leftPaddleY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        } else if (ballX > canvas.width - 20 && ballY > rightPaddleY && ballY < rightPaddleY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        }

        // Left side (Player 2 scores)
        if (ballX < 0) {
            player2Score++;
            checkForWin();
            if (!isGameOver) waitAndResetBall();
        }

        // Right side (Player 1 scores)
        if (ballX > canvas.width) {
            player1Score++;
            checkForWin();
            if (!isGameOver) waitAndResetBall();
        }
    }

    function waitAndResetBall() {
        isWaiting = true;
        setTimeout(() => {
            resetBall();
            isWaiting = false;
        }, 2000); // 2-second wait
    }

    function movePaddles() {
        leftPaddleY += leftPaddleSpeed;
        rightPaddleY += rightPaddleSpeed;

        // CPU movement if PvC mode
        if (gameMode === 'PvC') {
            if (ballY > leftPaddleY + paddleHeight / 2) {
                leftPaddleSpeed = 4;
            } else if (ballY < leftPaddleY + paddleHeight / 2) {
                leftPaddleSpeed = -4;
            } else {
                leftPaddleSpeed = 0;
            }
        }

        // Prevent paddles from going off the screen
        if (leftPaddleY < 0) leftPaddleY = 0;
        if (leftPaddleY > canvas.height - paddleHeight) leftPaddleY = canvas.height - paddleHeight;

        if (rightPaddleY < 0) rightPaddleY = 0;
        if (rightPaddleY > canvas.height - paddleHeight) rightPaddleY = canvas.height - paddleHeight;
    }

    function resetBall() {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = -ballSpeedX;
    }

    function keyDownHandler(e) {
        if (e.key === 'ArrowUp') rightPaddleSpeed = -4;
        if (e.key === 'ArrowDown') rightPaddleSpeed = 4;
        if (e.key === 'w') leftPaddleSpeed = -4;
        if (e.key === 's') leftPaddleSpeed = 4;
    }

    function keyUpHandler(e) {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') rightPaddleSpeed = 0;
        if (e.key === 'w' || e.key === 's') leftPaddleSpeed = 0;
    }

    function checkForWin() {
        if (player1Score === 7 || player2Score === 7) {
            isGameOver = true;
            triggerConfetti();
            ctx.fillStyle = 'white';
            ctx.font = '30px Arial';
            ctx.fillText(player1Score === 7 ? "Player 1 Wins!" : "Player 2 Wins!", canvas.width / 2 - 100, canvas.height / 2);
        }
    }

    // Confetti animation trigger
    function triggerConfetti() {
        let confettiSettings = { target: 'pongGame', max: 150, size: 2, animate: true };
        let confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }

    gameLoop();
</script>

<!-- Add the confetti script -->
<script src="https://cdn.jsdelivr.net/npm/confetti-js@0.0.18/dist/index.min.js"></script>

 <script>
  // Prevent the default bahavior the arrow
  window.addEventListener("keydown", function(e) {
    if (["ArrowUp", "ArrowDown", "ArrowRight"].includes(e.key))
      e.preventDefault();
   });
   </script>

