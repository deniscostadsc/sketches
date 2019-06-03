/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
const CANVAS_HEIGHT = 600
const CANVAS_WIDTH = 600

function setup () {
  createCanvas(600, 600)
}

function randomNumber (start, end) {
  return Math.floor((Math.random() * end) + start)
}

function draw () {
  rect(randomNumber(0, 590), randomNumber(0, 590), 100, 100)
}
