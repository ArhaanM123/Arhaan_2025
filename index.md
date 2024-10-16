---
layout: base
title: Student Home 
description: Home Page
image: /images/mario_animation.png
hide: true
---

**My name is Arhaan Memon and my journey starts here.**

<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
{% include nav/home.html %}
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %}

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<!--<p id="mario" class="sprite"></p>-->
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->

<br>
<a href="https://illuminati1618.github.io/yash_2025/2024/10/15/finalprojectsprint2_IPYNB_2_.html">
Sprint 2 Final Project and Culmination of Lessons
</a>

<div class="grid-container">
<table>
  <tr>
      <td>
          <a href="https://nighthawkcoders.github.io/portfolio_2025/csp/big-idea/p2/3-1" class="box">
              Variables (Lesson Taught)
          </a>
          <div class="dropdown-text">
              > Store values that can change<br>
              > Use as containers for information<br>
              > Essential for programming
          </div>
      </td>
      <td>
          <a href="https://arhaanm123.github.io/Arhaan_2025/3.2/Data/Abstraction/Hacks" class="box">
              Data Abstraction
          </a>
          <div class="dropdown-text">
              > Organize complex data<br>
              > Make code easier to understand<br>
              > Ensure correct usage
          </div>
      </td>
  </tr>
  <tr>
      <td>
          <a href="https://arhaanm123.github.io/Arhaan_2025/3.3/Math/Expressions/Hacks" class="box">
              Mathematical Expressions
          </a>
          <div class="dropdown-text">
              > Use algorithms for calculations<br>
              > Apply expressions in loops<br>
              > Simplify logic in pseudocode
          </div>
      </td>
      <td>
          <a href="https://nighthawkcoders.github.io/portfolio_2025/csp/big-idea/p2/3-4" class="box">
              Strings (Lesson Taught)
          </a>
          <div class="dropdown-text">
              > Handle and display text<br>
              > Enclosed in quotes<br>
              > Useful for messages and input
          </div>
      </td>
  </tr>
  <tr>
      <td>
          <a href="https://arhaanm123.github.io/Arhaan_2025/3.5/Boolean/Expressions/Hacks" class="box">
              Boolean Expressions
          </a>
          <div class="dropdown-text">
              > True/False statements<br>
              > Basis of conditions<br>
              > Used in decision-making
          </div>
      </td>
      <td>
          <a href="https://arhaanm123.github.io/Arhaan_2025/3.6/Conditionals/Hacks" class="box">
              Conditionals
          </a>
          <div class="dropdown-text">
              > Run actions based on input<br>
              > Reduce manual effort<br>
              > Improve program flexibility
          </div>
      </td>
  </tr>
  <tr>
      <td>
          <a href="https://arhaanm123.github.io/Arhaan_2025/3.7/Nested/Conditionals/Hacks" class="box">
              Nested Conditionals
          </a>
          <div class="dropdown-text">
              > Conditions within conditions<br>
              > Adds complex decision-making<br>
              > Helps handle edge cases
          </div>
      </td>
      <td>
          <a href="https://arhaanm123.github.io/Arhaan_2025/3.8/Forloops/Hacks" class="box">
              Iteration
          </a>
          <div class="dropdown-text">
              > Repeat code efficiently<br>
              > Useful for repetitive tasks<br>
              > Simplify structure
          </div>
      </td>
  </tr>
  <tr>
      <td colspan="2">
          <a href="https://arhaanm123.github.io/Arhaan_2025/3.10/Lists/Hacks" class="box">
              List Operations
          </a>
          <div class="dropdown-text">
              > Modify list items<br>
              > Manage collections<br>
              > Essential for data handling
          </div>
      </td>
  </tr>
</table>
</div>




<tr>
<td colspan="2">
    During our study of topics 3.1 and 3.4, we created a team repository with detailed notes. In this group project, we:
    <div class="dropdown-text">
        > Learned to use variables, different data types, and advanced string operations, and taught our peers<br>
        > Gained experience managing a group repository, including forking and merging<br>
        > Developed skills to resolve merge conflicts and handle pull requests<br>
        > Taught and practiced mathematical operations in Python and explained conditional statements<br>
        > Explored various data types, focusing on their unique features<br>
        > Provided detailed lessons on string manipulation and its uses<br>
        > Created mini-projects like string analyzers and password strength checkers<br>
    </div>
    By teaching others about these topics, we strengthened our own understanding. Our lessons were interactive, featuring live code examples and detailed explanations. This helped us see how these concepts apply in real-life situations, preparing us for future projects.
    <div class="dropdown-text">
        > We also developed projects that mimic real-life scenarios, such as a password validator and a hack for managing user information with unique IDs.<br>
        > These projects showed our understanding of important programming concepts and our readiness to move forward.<br>
    </div>
    Overall, this team teaching project was a crucial step in our growth as programmers, and the results we produced reflect our readiness for the next level in the course.
</td>
</tr>





<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script>





