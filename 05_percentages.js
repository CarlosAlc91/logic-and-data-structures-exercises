/* 

* what is the percentage of x number?
* Examples:
  20% of 100 = 20
  43% of 897 = 385.71
*/

let percentage = 33
let number = 100

function percentageOfNumber(percentage, number) {
  let computing = (percentage * (number / 100))
  let result = `${percentage}% of ${number} is ${computing.toFixed(1)}`

  return result
}

console.log(percentageOfNumber(percentage, number))