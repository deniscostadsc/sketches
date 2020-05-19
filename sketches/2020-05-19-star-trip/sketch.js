/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 600

const starBirthCicle = 60;
const starSizeAtBirth = 10;
const stars = [];

function setup () {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function randomNumber (start, end) {
  return Math.floor((Math.random() * end) + start)
}

function giveBirthToAStar() {
  stars.push({
    starSize: starSizeAtBirth,
    speed: 0,
    position: {
      x: randomNumber(0, CANVAS_WIDTH),
      y: randomNumber(0, CANVAS_HEIGHT),
    },
  });
}

function redrawStars() {
  for (let i = 0; i < stars.length; i++) {
    circle(stars[i].position.x, stars[i].position.y, stars[i].starSize);
  }
}

function moveStars() {
}

function draw () {
  background(0);
  noStroke();
  fill(255, 255, 255);

  if (frameCount % starBirthCicle == 0) {
    giveBirthToAStar();
  }

  moveStars();
  redrawStars();
}
