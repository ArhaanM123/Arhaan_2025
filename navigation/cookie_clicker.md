---
layout: page
title: Cookie Clicker
description: Cookie Clicker
permalink: /cookie/
---

{% include nav/home.html %}

# 🍪 Cookie Clicker Game 🍪

<p style="text-align: center; font-size: 1.5em;">Click the cookie to earn points!</p>

 ![cookie](../images/Cookie-Clicker.png) 

<div style="text-align: center;">
  <h2 style="font-family: 'Arial', sans-serif; font-size: 2em; color: #4CAF50; margin-top: 20px;">Score: <span id="score">0</
  
  span></h2>
</div>

<script>
  let score = 0;
  const cookie = document.getElementById("cookie");
  const scoreDisplay = document.getElementById("score");

  cookie.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = score;

    // Add a fun "bounce" effect when clicking the cookie
    cookie.style.transform = "scale(1.1)";
    setTimeout(() => {
      cookie.style.transform = "scale(1)";
    }, 100);
  });
</script>


