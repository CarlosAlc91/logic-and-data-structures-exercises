/* 

* Dada una palabra, buscarla en una frase y devilver cuantas veces aparece en ella.
* La frase y la palabra deben ser parametros de una funcion.

* Ejemplo
  -concidencias ('Hola soy una palabra en una frase, PALABRA', 'palabra') = devuelve 1
  -conincidencias ('Me llamo Carlos', 'persona') = devuelve 0
*/

let phrase = 'Hi, my name is Carlos'
let word = 'Carlos'

function searchingWords(phrase, word) {
  let cleaningText = phrase.replace(/[!,.-]/gi, '')
  console.log(cleaningText)
  let result = 0

  if (cleaningText.includes(word)) {
    let wordss = cleaningText.split(' ')
    let mapping = {}

    for (let wording of wordss) {
      if (mapping[wording]) {
        mapping[wording]++
      } else {
        mapping[wording] = 1
      }
    }
    result = mapping[word]

  } else {
    result = 0
  }

  return result

}

console.log(searchingWords(phrase, word))