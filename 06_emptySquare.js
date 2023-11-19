/* 

* Draw an empty square with asterisks

* Example:
  square of 4

****
*  *
*  *
****

*/

let square = 20

function upSide(square) {
  let direction = ''
  for (let i = 0; i < square; i++) {
    direction += '*'
  }

  return direction
}

function squareFinished(square) {
  let draw = upSide(square) + '\n'
  let container = ''

  for (let i = 0; i < square - 2; i++) {
    container = '*'

    for (let j = 0; j < square - 2; j++) {
      container += ' '
    }

    container += '*'
    draw += `${container} \n`
  }

  draw += upSide(square)

  return draw
}
/* console.log(asterisksSquare(square)) */
console.log(squareFinished(square))