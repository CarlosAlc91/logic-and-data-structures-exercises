/* 

* Dado un string, devoler el caracter mas usado
* Example:
  repeated('carlosss')
* Resultado:
  Lo que mas se repite es: s

*/

let word = 'carloss'

function mostUsed(word) {
  let mappingWords = {}
  let maxRepeated = 0
  let mostRepeatedWord = ''

  for (let words of word) {
    console.log(words)

    if (!mappingWords[words]) {
      mappingWords[words] = 1
    } else {
      mappingWords[words]++
    }
  }

  for (let words in mappingWords) {
    if (mappingWords[words].toString().trim().length === 1 && mappingWords[words] > maxRepeated) {
      maxRepeated = mappingWords[words]
      mostRepeatedWord = words
    }
  }
  let result = `Most repeated word is "${mostRepeatedWord}" and it repeats ${maxRepeated} times`
  return result
}

console.log(mostUsed(word))