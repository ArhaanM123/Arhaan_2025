---
layout: post
title: Corrections
search_exclude: true
permalink: /corrections/
---
<div class="content-container">
  <h1>Computer Science Practice Questions</h1>
  <p>Explore key computer science concepts through detailed explanations of multiple-choice questions and solutions.</p>

  <section class="question">
    <h2>Question 11</h2>
    <p>A spinner is divided into three sections. The sector labeled "Red" is four times as large as each of the sectors labeled "Yellow" and "Blue," which are of equal size. The procedure below is intended to simulate the behavior of the spinner. Which of the following can be used to replace the procedure to correctly simulate the spinner?</p>
    
    <h3>Correct</h3>
    <pre>
spin ← RANDOM(1, 6)
IF spin = 1
    RETURN "Yellow"
IF spin = 2
    RETURN "Blue"
RETURN "Red"
    </pre>

    <h3>Not Correct</h3>
    <pre>
spin ← RANDOM(1, 6)
IF spin = 1
    RETURN "Red"
IF spin = 2
    RETURN "Yellow"
RETURN "Blue"
    </pre>

    <h3>Explanation</h3>
    <p>The correct procedure assigns probabilities that match the spinner’s sizes: "Red" (4/6), "Yellow" (1/6), and "Blue" (1/6). The incorrect solution assigns 4/6 probability to "Blue" instead of "Red," which is incorrect.</p>
  </section>

  <section class="question">
    <h2>Question 17</h2>
    <p>Which of the following actions could be used to help reduce the digital divide?</p>
    <ul>
      <li><strong>I.</strong> Providing free education and training on how to use computing devices.</li>
      <li><strong>II.</strong> Providing free or low-cost computing devices to low-income individuals.</li>
      <li><strong>III.</strong> Providing networks and infrastructure to people in remote areas.</li>
    </ul>
    
    <h3>Correct</h3>
    <pre>I, II, and III</pre>

    <h3>Not Correct</h3>
    <pre>I and II only</pre>

    <h3>Explanation</h3>
    <p>Closing the digital divide requires teaching people how to use technology (I), providing affordable devices (II), and building networks in remote areas (III). All are essential to ensuring equal access to technology.</p>
  </section>

  <section class="question">
    <h2>Question 25</h2>
    <p>For which of the following strings is it NOT possible to use byte pair encoding to shorten the string’s length?</p>

    <h3>Correct</h3>
    <pre>"Level_Up"</pre>

    <h3>Not Correct</h3>
    <pre>"Banana"</pre>

    <h3>Explanation</h3>
    <p>"Level_Up" cannot be shortened because it has no repeating pairs of characters. In contrast, "Banana" has pairs like "na," which can be replaced to shorten the string.</p>
  </section>

  <section class="question">
    <h2>Question 29</h2>
    <p>The diagram below shows a circuit composed of three logic gates. Each gate takes two inputs and produces a single output. For which of the following input values will the circuit have an output of false?</p>

    <h3>Correct</h3>
    <pre>A = true, B = false, C = false, D = false</pre>

    <h3>Not Correct</h3>
    <pre>A = false, B = false, C = false, D = true</pre>

    <h3>Explanation</h3>
    <p>The first set of inputs makes both the AND and OR gates output false, so the final OR gate outputs false. The second set of inputs makes the final OR gate output true, which is incorrect.</p>
  </section>

  <section class="question">
    <h2>Question 31</h2>
    <p>A robot in a grid is initially in the bottom-right square and must reach the top-left gray square. The following programs are each intended to move the robot to the gray square. Program II uses a flexible procedure that checks if the goal is reached.</p>

    <h3>Correct</h3>
    <pre>Program II correctly moves the robot to the gray square, but program I does not.</pre>

    <h3>Not Correct</h3>
    <pre>Both program I and program II correctly move the robot to the gray square.</pre>

    <h3>Explanation</h3>
    <p>Program I works only for this specific grid layout. Program II is more adaptable, adjusting the robot’s movements based on its position, making it flexible for different grid layouts.</p>
  </section>

  <section class="question">
    <h2>Question 41</h2>
    <p>A teacher provides a way for students to improve their course grades if they score higher on their final exam. If the final score is greater than the midterm score, it replaces the midterm score in the total calculation.</p>

    <h3>Correct</h3>
    <pre>adjustedTotal ← Max(midtermExam, finalExam) + finalExam</pre>

    <h3>Not Correct</h3>
    <pre>adjustedTotal ← Max(midtermExam, finalExam) + midtermExam</pre>

    <h3>Explanation</h3>
    <p>The correct formula ensures the higher score is always used. The incorrect formula adds the midterm score, even when it is replaced, violating the grading policy.</p>
  </section>

  <section class="question">
    <h2>Question 58</h2>
    <p>Which of the following are true statements about how the Internet enables crowdsourcing?</p>
    <ul>
      <li><strong>I.</strong> Provides access to tools and knowledge.</li>
      <li><strong>II.</strong> Lowers geographic barriers.</li>
      <li><strong>III.</strong> Solves all computational problems efficiently.</li>
    </ul>

    <h3>Correct</h3>
    <pre>I and II only</pre>

    <h3>Not Correct</h3>
    <pre>I and III only</pre>

    <h3>Explanation</h3>
    <p>While the Internet provides tools and breaks down geographic barriers (I, II), not all problems can be solved efficiently through crowdsourcing (III), as some problems are too complex.</p>
  </section>

  <section class="question">
    <h2>Question 64</h2>
    <p>Which of the following statements describe how cloud computing has affected Internet communication?</p>

    <h3>Correct</h3>
    <ul>
      <li>Cloud computing has helped enhance collaboration.</li>
      <li>Cloud computing has introduced new data-security concerns.</li>
    </ul>

    <h3>Not Correct</h3>
    <ul>
      <li>Cloud computing has eliminated the need to provide redundancy in Internet routing.</li>
      <li>Cloud computing has reduced concerns about intellectual property rights.</li>
    </ul>

    <h3>Explanation</h3>
    <p>Cloud tools allow teamwork from anywhere but create risks of data breaches. Redundancy and intellectual property concerns are still important issues that cloud computing does not solve.</p>
  </section>
</div>

<style>
  body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background: #000; /* Black background */
      color: #fff; /* White text */
      margin: 0;
      padding: 20px;
  }
  .content-container {
      max-width: 800px;
      margin: 0 auto;
      background: #222; /* Dark gray for contrast */
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  }
  h1 {
      color: #fff;
      text-align: center;
      margin-bottom: 20px;
  }
  .question {
      margin-bottom: 40px;
  }
  h2 {
      color: #f39c12; /* Golden color for headers */
      border-bottom: 2px solid #e67e22;
      padding-bottom: 5px;
  }
  pre {
      background: #333; /* Dark gray for code snippets */
      padding: 10px;
      border-radius: 4px;
      color: #1abc9c; /* Mint green for code */
      overflow-x: auto;
  }
  ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
  }
  ul li {
      padding: 5px 0;
  }
  .question p {
      margin-bottom: 10px;
  }
</style>