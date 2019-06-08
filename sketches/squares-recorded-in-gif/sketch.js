/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */

const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 600
const SQUARE_SIZE = 100
const capturer = new CCapture({
  framerate: 60,
  format: 'gif',
  workersPath: '../../lib/',
  verbose: true
})

let gifLength = 100
let canvas

function setup () {
  canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).canvas
  background(255)
  capturer.start()
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

  if (frameCount < gifLength) {
    capturer.capture(canvas)
  } else if (frameCount === gifLength) {
    capturer.stop()
    capturer.save()
  }
}
