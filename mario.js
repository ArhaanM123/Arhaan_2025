// Mario metadata (replace this with actual metadata values)
var mario_metadata = {
  Walk: { row: 0, col: 0, frames: 4 },
  Run1: { row: 1, col: 0, frames: 6 },
  Puff: { row: 2, col: 0, frames: 4 },
  Cheer: { row: 3, col: 0, frames: 3 },
  Flip: { row: 4, col: 0, frames: 4 },
  Rest: { row: 5, col: 0, frames: 1 }
};

class Mario {
  constructor(meta_data) {
    this.tID = null;  // Task ID for animation
    this.positionX = 0;
    this.currentSpeed = 0;
    this.marioElement = document.getElementById("mario");
    this.pixels = 256; // Pixel offset for sprite sheet
    this.interval = 100; // Animation speed in milliseconds
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

// Event listeners for keyboard
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

// Event listener for touch events
window.addEventListener("touchstart", (event) => {
  event.preventDefault();
  if (event.touches[0].clientX > window.innerWidth / 2) {
    if (mario.currentSpeed === 0) {
      mario.startWalking();
    } else if (mario.currentSpeed === 3) {
      mario.startRunning();
    }
  } else {
    mario.startPuffing();
  }
});

// Stop animation on window blur
window.addEventListener("blur", () => {
  mario.stopAnimate();
});

// Start flipping animation on window focus
window.addEventListener("focus", () => {
  mario.startFlipping();
});

// Start resting animation when page loads
document.addEventListener("DOMContentLoaded", () => {
  const scale = window.devicePixelRatio;
  const sprite = document.querySelector(".sprite");
  sprite.style.transform = `scale(${0.2 * scale})`;
  mario.startResting();
});