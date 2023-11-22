/* 

* Dado un numero entero, inviertelo y devuelve el numero enteero
* ejemplo:
  invertirNumero(67) => 76

*/

let number = -1256

function invertedNumber(number) {
  let inververted = parseInt(
    number
      .toString()
      .split('')
      .reverse()
      .join('')) * Math.sign(number)

  return inververted
}

console.log(invertedNumber(number))