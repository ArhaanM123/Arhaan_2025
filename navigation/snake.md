---
layout: page
title: Snake
description: Snake game
permalink: /snake/
---

{% include nav/home.html %}

<h2>Snake Game</h2>
<div class="container">
<header class="pb-3 mb-4">
    <p>Score: <span id="score_value">0</span></p>
    <p class="score-board">High Score: <span id="high_score">0</span></p>
</header>

<!-- Settings -->
<div class="theme-selector">
    <label for="theme">Choose Theme: </label>
    <select id="theme">
        <option value="classic">Classic</option>
        <option value="dark">Dark</option>
        <option value="neon">Neon</option>
    </select>
</div>

<!-- Canvas -->
<canvas id="snake" width="400" height="400" tabindex="1"></canvas>

<!-- Buttons -->
<div class="buttons-section">
    <button id="new_game" class="btn">New Game</button>
    <button id="pause_game" class="btn">Pause</button>
    <button id="resume_game" class="btn">Resume</button>
</div>
</div>

<style>
body {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin: 0;
}

.container {
    width: 80%;
    margin: auto;
}

canvas {
    border: 5px solid #FFFFFF;
    border-radius: 10px;
    display: block;
    margin: 20px auto;
}

header {
    font-size: 24px;
    margin-top: 20px;
    font-weight: bold;
    color: #FFEB3B;
}

.btn {
    font-size: 18px;
    padding: 10px 20px;
    margin: 10px;
    color: #FFFFFF;
    background-color: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
}

.btn:hover {
    background-color: #0056b3;
}

.score-board {
    font-size: 18px;
    margin-top: 10px;
    color: #00FF00;
}
</style>

<script>
(function () {
    // Canvas Setup
    const canvas = document.getElementById('snake');
    const ctx = canvas.getContext('2d');
    const BLOCK = 20;

    // Load Images
    const appleImg = new Image();
    const snakeImg = new Image();
    appleImg.src = 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.png'; // Replace with your apple image URL
    snakeImg.src = 'https://upload.wikimedia.org/wikipedia/commons/5/54/Snake_vector.png'; // Replace with your snake image URL

    let score = 0;
    let highScore = 0;
    let snake = [{ x: 10, y: 10 }];
    let direction = { x: 0, y: 0 };
    let food = { x: 5, y: 5 };
    let running = false;
    let gameInterval;

    // Prevent Arrow Key Scrolling
    window.addEventListener('keydown', function (e) {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault();
        }
    });

    // Event Listeners
    document.getElementById('new_game').addEventListener('click', startGame);
    document.getElementById('pause_game').addEventListener('click', pauseGame);
    document.getElementById('resume_game').addEventListener('click', resumeGame);
    document.getElementById('theme').addEventListener('change', changeTheme);
    document.addEventListener('keydown', handleKeyPress);

    // Draw Functions
    function drawSnake() {
        snake.forEach((block) => {
            ctx.drawImage(snakeImg, block.x * BLOCK, block.y * BLOCK, BLOCK, BLOCK);
        });
    }

    function drawFood() {
        ctx.drawImage(appleImg, food.x * BLOCK, food.y * BLOCK, BLOCK, BLOCK);
    }

    function clearCanvas() {
        ctx.fillStyle = '#1E2749';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Game Functions
    function moveSnake() {
        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        snake.unshift(head);

        // Check if food eaten
        if (head.x === food.x && head.y === food.y) {
            score++;
            updateScore();
            placeFood();
        } else {
            snake.pop();
        }

        // Check collisions
        if (
            head.x < 0 ||
            head.x >= canvas.width / BLOCK ||
            head.y < 0 ||
            head.y >= canvas.height / BLOCK ||
            snake.slice(1).some((block) => block.x === head.x && block.y === head.y)
        ) {
            endGame();
        }
    }

    function placeFood() {
        food.x = Math.floor(Math.random() * (canvas.width / BLOCK));
        food.y = Math.floor(Math.random() * (canvas.height / BLOCK));
    }

    function updateScore() {
        document.getElementById('score_value').innerText = score;
        if (score > highScore) {
            highScore = score;
            document.getElementById('high_score').innerText = highScore;
        }
    }

    function startGame() {
        score = 0;
        updateScore();
        snake = [{ x: 10, y: 10 }];
        direction = { x: 0, y: 0 };
        placeFood();
        running = true;
        gameInterval = setInterval(updateGame, 200);
    }

    function updateGame() {
        clearCanvas();
        drawFood();
        drawSnake();
        moveSnake();
    }

    function pauseGame() {
        if (running) {
            clearInterval(gameInterval);
            running = false;
        }
    }

    function resumeGame() {
        if (!running) {
            gameInterval = setInterval(updateGame, 200);
            running = true;
        }
    }

    function handleKeyPress(e) {
        switch (e.key) {
            case 'ArrowUp':
                if (direction.y === 0) direction = { x: 0, y: -1 };
                break;
            case 'ArrowDown':
                if (direction.y === 0) direction = { x: 0, y: 1 };
                break;
            case 'ArrowLeft':
                if (direction.x === 0) direction = { x: -1, y: 0 };
                break;
            case 'ArrowRight':
                if (direction.x === 0) direction = { x: 1, y: 0 };
                break;
        }
    }

    function endGame() {
        clearInterval(gameInterval);
        alert('Game Over! Final Score: ' + score);
    }

    // Theme Change
    function changeTheme() {
        const theme = document.getElementById('theme').value;
        switch (theme) {
            case 'classic':
                canvas.style.background = '#1E2749';
                break;
            case 'dark':
                canvas.style.background = '#000000';
                break;
            case 'neon':
                canvas.style.background = 'linear-gradient(to bottom, #0F0, #00F)';
                break;
        }
    }
})();
</script>
