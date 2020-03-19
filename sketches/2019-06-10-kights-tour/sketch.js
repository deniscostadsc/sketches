/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
const CANVAS_SIZE = 600
const SHIFT_FOR_LETTERS = 30
const CANVAS_WIDTH = CANVAS_SIZE + SHIFT_FOR_LETTERS
const CANVAS_HEIGHT = CANVAS_SIZE + SHIFT_FOR_LETTERS
const BOARD_SIDE = 8
const SQUARE_SIZE = CANVAS_SIZE / BOARD_SIDE
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const NUMBERS = ['8', '7', '6', '5', '4', '3', '2', '1']

const chessBoard = new Array(BOARD_SIDE)

function setup () {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)

  for (let x = 0; x < BOARD_SIDE; x++) {
    chessBoard[x] = new Array(BOARD_SIDE)
  }

  let isBlack = false
  for (let y = 0; y < BOARD_SIDE; y++) {
    for (let x = 0; x < BOARD_SIDE; x++) {
      if (isBlack) {
        fill(0, 0, 0)
      } else {
        fill(255, 255, 255)
      }

      noStroke()
      rect(
        SQUARE_SIZE * x + SHIFT_FOR_LETTERS,
        SQUARE_SIZE * y + SHIFT_FOR_LETTERS,
        SQUARE_SIZE,
        SQUARE_SIZE
      )

      isBlack = !isBlack
    }
    isBlack = !isBlack
  }

  LETTERS.forEach((letter, index) => {
    textSize(24)
    fill(0, 0, 0)
    text(letter, SQUARE_SIZE * (index + 1), 17)
  })

  NUMBERS.forEach((number, index) => {
    textSize(24)
    fill(0, 0, 0)
    text(number, 6, SQUARE_SIZE * (index + 1))
  })
}

function draw () {
  // put drawing code here
}
