/* 
*Dado un numero, devolver su tabla de multiplicar completa

*Ejemplos:
  Ejecuto esta funcion:
  tablaDeMultiplicar(5)

  Devuelve:
  #Tabla del 5#
  1 x 5 = 5
*/

let multipliedBy = 5

function multiplicationTable(multipliedBy) {

  let header = `Multiplication of number ${multipliedBy}\n\n`

  for (let i = 1; i <= 10; i++) {
    const numbers = [i]
    let multiplication = multipliedBy * numbers


    header += `${multipliedBy} x ${numbers} = ${multiplication}\n`
  }


  return header
}

console.log(multiplicationTable(multipliedBy))