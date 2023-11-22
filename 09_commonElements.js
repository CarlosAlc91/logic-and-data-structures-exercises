/* 

* Dado dos arrays, devolver un array con solo los elementos comunes entre ambos
* Ejemplo:
  elementosComunes([4,5,6,7], [7,8,9,7,5]) => [5,7]

*/

let firstArray = [4, 5, 6, 7]
let secondArray = [7, 8, 9, 7, 5]

function commonArray(firstArray, secondArray) {
  /* const filtered = firstArray.filter(element => {
    return secondArray.includes(element)
  })

  return filtered */

  const common = []

  for (const element of firstArray) {
    if (secondArray.includes(element)) {
      common.push(element)
    }
  }

  return common
}
console.log(commonArray(firstArray, secondArray))