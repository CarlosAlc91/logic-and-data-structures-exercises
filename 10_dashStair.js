/* 

* Dado un numero, mostrar una escalera con escalones "[-]" usando el numero para los niveles de la escalera.

*Ejemplo:
  escalera(3)
  [-]
  [-][-]
  [-][-][-]
*/

let number = 4

function stair(number) {
  let completeStair = ''

  for (let i = 1; i <= number; i++) {
    const level = [i]

    let step = ''
    for (let j = 1; j <= level; j++) {
      step += '[-]'

    }

    completeStair += `${step} \n`
  }

  return completeStair
}

console.log(stair(number))