/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */

const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 600
const SQUARE_SIZE = 100

function setup () {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
}

function randomNumber (start, end) {
  return Math.floor((Math.random() * end) + start)
}

function draw () {
  rect(
    randomNumber(0, CANVAS_WIDTH),
    randomNumber(0, CANVAS_HEIGHT),
    SQUARE_SIZE,
    SQUARE_SIZE
  )
}
