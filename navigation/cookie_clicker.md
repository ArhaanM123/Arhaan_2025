---
layout: page
title: Cookie Clicker
description: Cookie Clicker
permalink: /cookie/
---

{% include nav/home.html %}

# 🍪 Cookie Clicker Game 🍪

<p style="text-align: center; font-size: 1.5em;">Click the cookie to earn points!</p>

 <div style="text-align: center;">
  <img src="../images/Cookie-Clicker.png" id="cookie" width="250px" alt="cookie" style="cursor: pointer; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); border-radius: 50%;">
  <h2 style="font-family: 'Arial', sans-serif; font-size: 2em; color: #4CAF50; margin-top: 20px;">Score: <span id="score">0</span></h2>
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

 <script>
  // Prevent the default bahavior the arrow
  window.addEventListener("keydown", function(e) {
    if (["ArrowUp", "ArrowDown", "ArrowRight"].includes(e.key))
      e.preventDefault();
   });
   </script>
