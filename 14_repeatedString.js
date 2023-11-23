/* 

* Dado un string y un numero, repetir el string tantas veces como el numero indique

* Ejemplo:
  repiteme('carlos', 2)

* Devuelve:
  carloscarlos

*/

let phrase = 'carlos'

let number = 2

/* classic function */
function repeatedString(phrase, number) {
  let result = ''

  for (let i = 0; i < number; i++) {
    result += `${phrase}\t`
  }

  return result
}

/* prototype function */
String.prototype.repeatedString = function (number) {
  let result = ''

  for (let i = 0; i < number; i++) {
    result += `${this}\t`
  }

  return result
}


console.log(repeatedString(phrase, number))
console.log('carlos'.repeatedString(5))