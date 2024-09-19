# Cookie Clicker Game

<p>Click the cookie to earn points!</p>

<div style="text-align: center;">
  <img src="https://cdn.pixabay.com/photo/2021/01/19/17/01/cookies-5930089_1280.jpg" id="cookie" width="200px" alt="cookie" style="cursor: pointer;">alt="cookie" style="cursor: pointer;">
  <h2>Score: <span id="score">0</span></h2>
</div>

<script>
  let score = 0;
  const cookie = document.getElementById("cookie");
  const scoreDisplay = document.getElementById("score");

  cookie.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = score;
  });
</script>
