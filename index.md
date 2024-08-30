---
layout: base
title: Student Home 
description: Home Page
hide: true
---

My journey starts here. My name is Arhaan Memon 

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #000;
        }
        canvas {
            border: 1px solid #fff;
        }
    </style>
</head>
<body>
    <canvas id="gameCanvas" width="400" height="400"></canvas>
    <script>
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");

        const box = 20;
        let snake = [{ x: 9 * box, y: 10 * box }];
        let direction = "";
        let food = {
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
        let score = 0;

        document.addEventListener("keydown", setDirection);

        function setDirection(event) {
            if (event.keyCode === 37 && direction !== "RIGHT") {
                direction = "LEFT";
            } else if (event.keyCode === 38 && direction !== "DOWN") {
                direction = "UP";
            } else if (event.keyCode === 39 && direction !== "LEFT") {
                direction = "RIGHT";
            } else if (event.keyCode === 40 && direction !== "UP") {
                direction = "DOWN";
            }
        }

        function drawGame() {
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < snake.length; i++) {
                ctx.fillStyle = (i === 0) ? "#0f0" : "#fff";
                ctx.fillRect(snake[i].x, snake[i].y, box, box);
            }

            ctx.fillStyle = "#f00";
            ctx.fillRect(food.x, food.y, box, box);

            let snakeX = snake[0].x;
            let snakeY = snake[0].y;

            if (direction === "LEFT") snakeX -= box;
            if (direction === "UP") snakeY -= box;
            if (direction === "RIGHT") snakeX += box;
            if (direction === "DOWN") snakeY += box;

            if (snakeX === food.x && snakeY === food.y) {
                score++;
                food = {
                    x: Math.floor(Math.random() * 19 + 1) * box,
                    y: Math.floor(Math.random() * 19 + 1) * box
                };
            } else {
                snake.pop();
            }

            const newHead = { x: snakeX, y: snakeY };

            if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
                clearInterval(game);
                alert("Game Over!");
            }

            snake.unshift(newHead);

            ctx.fillStyle = "#fff";
            ctx.font = "20px Arial";
            ctx.fillText("Score: " + score, box, box);
        }

        function collision(head, array) {
            for (let i = 0; i < array.length; i++) {
                if (head.x === array[i].x && head.y === array[i].y) {
                    return true;
                }
            }
            return false;
        }

        const game = setInterval(drawGame, 100);
    </script>
</body>
</html>