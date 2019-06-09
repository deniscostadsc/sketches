/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */

const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 600
const FIRE_SQUARE_SIZE = 10
const FIRE_WIDTH = 60
const FIRE_HEIGHT = 60
const FRAME_RATE = 20

const fireColorPalette = [
  [0, 0, 0],
  [7, 7, 7],
  [31, 7, 7],
  [47, 15, 7],
  [71, 15, 7],
  [87, 23, 7],
  [103, 31, 7],
  [119, 31, 7],
  [143, 39, 7],
  [159, 47, 7],
  [175, 63, 7],
  [191, 71, 7],
  [199, 71, 7],
  [223, 79, 7],
  [223, 87, 7],
  [223, 87, 7],
  [215, 95, 7],
  [215, 95, 7],
  [215, 103, 15],
  [207, 111, 15],
  [207, 119, 15],
  [207, 127, 15],
  [207, 135, 23],
  [199, 135, 23],
  [199, 143, 23],
  [199, 151, 31],
  [191, 159, 31],
  [191, 159, 31],
  [191, 167, 39],
  [191, 167, 39],
  [191, 175, 47],
  [183, 175, 47],
  [183, 183, 47],
  [183, 183, 55],
  [207, 207, 111],
  [223, 223, 159],
  [239, 239, 199],
  [255, 255, 255]
]

const fireMatrix = new Array(FIRE_WIDTH)

function setup () {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
  frameRate(FRAME_RATE)
  background(0)

  for (let x = 0; x < FIRE_WIDTH; x++) {
    fireMatrix[x] = new Array(FIRE_HEIGHT)
  }

  let paletteIndex = 1
  for (let y = 0; y < FIRE_HEIGHT; y++) {
    for (let x = 0; x < FIRE_WIDTH; x++) {
      if (y === FIRE_HEIGHT - 1) {
        fireMatrix[x][y] = fireColorPalette.length - 1
      } else {
        fireMatrix[x][y] = 0
      }
    }
    paletteIndex++
  }
  console.log(fireMatrix)
}

function drawFire () {
  let paletteIndex
  for (let y = 0; y < FIRE_HEIGHT; y++) {
    for (let x = 0; x < FIRE_WIDTH; x++) {
      paletteIndex = fireMatrix[x][y]
      fill(
        fireColorPalette[paletteIndex][0],
        fireColorPalette[paletteIndex][1],
        fireColorPalette[paletteIndex][2]
      )
      noStroke()
      rect(
        FIRE_SQUARE_SIZE * x,
        FIRE_SQUARE_SIZE * y,
        FIRE_SQUARE_SIZE,
        FIRE_SQUARE_SIZE
      )
    }
  }
}

function randomNumber (start, end) {
  return Math.floor((Math.random() * end) + start)
}

function getColorIndexFromBottom (x, y) {
  const indexFromBottom = fireMatrix[x][y + 1] - randomNumber(1, 2)
  if (indexFromBottom < 0) {
    return 0
  }
  return indexFromBottom
}

function updateFireMatrix (x, y) {
  for (let y = FIRE_HEIGHT - 2; y > 0; y--) {
    for (let x = 0; x < FIRE_WIDTH; x++) {
      if (randomNumber(1, 3) !== 1) {
        fireMatrix[x][y] = getColorIndexFromBottom(x, y)
      } else {
        if (x - 1 >= 0) {
          fireMatrix[x - 1][y] = getColorIndexFromBottom(x, y)
        } else {
          fireMatrix[x][y] = getColorIndexFromBottom(x, y)
        }
      }
    }
  }
}

function draw () {
  drawFire()
  updateFireMatrix()
}
