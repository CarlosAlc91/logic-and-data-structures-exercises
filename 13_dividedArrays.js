/* 

* Dado un array, dividirlo en tantos sub-arrays como sea necesario basandonos en un numero que indique su tamano

* Dividirlo en arrays de X elementos

* Ejemplo:
  divideArray([7,8,9,10], 2)

  retorno:
  [[7,8], [9,10]]

*/
let arr = [7, 8, 9, 10, 5, 5, 6, 7]
let size = 3

function dividedArrays(arr, size) {
  let mainArray = []

  for (let element of arr) {

    let lastArray = mainArray[mainArray.length - 1]

    if (!lastArray || lastArray.length === size) {
      mainArray.push([element])
    } else {
      lastArray.push(element)
    }

  }
  return mainArray
}

console.log(dividedArrays(arr, size))