/* 

* Dados dos numeros, devolver cuantos numeros IMPARES hay entre ellos.

impares(1, 100) => devuelve 49

*/

let start = 1
let end = 5

function oddNumbers(start, end) {

  /* let count = 0

  for (let i = start; i <= end; i++) {
    const element = [i]


    if (start % 2 !== 0) count++

    start++
    console.log(start)
  }
  return `Odd numbers count: ${count}` */

  let count = 0

  while (start < end) {
    if (start % 2 !== 0) count++
    start++
  }


  return count


}

console.log(oddNumbers(start, end))