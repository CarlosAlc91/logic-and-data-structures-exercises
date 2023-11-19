/* 

* Dada una cadena de text, darle la vuelta e invertir el orden de sus caracteres, sin usar metodos propios del lenguaje, solo estructucturas de control.

* Ejemplos:
  hola = aloh
  victor = rotciv
*/

let word = 'Carlos'

function invertedWords(word) {
  let invertedText = ''

  for (const words of word) {
    invertedText = `${words}${invertedText}`
  }

  return invertedText

}

console.log(invertedWords(word));

