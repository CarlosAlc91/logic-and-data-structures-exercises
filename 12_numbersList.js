/* 

* Dado un numero mostrar todoslos numeros desde ese numero hasta el 0 de 8 en 8, en una lista con guiones donde cada numero debe empezar por n.

upToZero(100)

From 100 to 0

n. 100
.....
n. 4

*/

let number = 100

function upToZero(number) {
  let header = `From ${number} to 0 \n`

  while (number > 0) {

    header += `- n. ${number} \n`
    number -= 8
  }

  if (number <= 0) {
    header += '- n.0 \n'
  }

  header += 'End'
  return header

}

console.log(upToZero(number))