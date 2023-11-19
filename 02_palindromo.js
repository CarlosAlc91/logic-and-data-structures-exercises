/* 

* Dada una cadena de texto, comprobar si es un palindromo o no.

* Ejemplo:
  ana, bob, otto, allivessevilla

*/

let palindrome = 'carlos'

function isPalindrome(palindrome) {
  let inverted = palindrome.split('').reverse().join('')

  if (inverted === palindrome) {
    return `${palindrome} is a palindrome`
  } else {
    return `${palindrome} is not a palindrome`
  }
  /* let palindromo = inverted === palindrome

  return palindromo ? `${palindrome} is palindrome` : `${palindrome} is not a palindomre` */

}

console.log(isPalindrome(palindrome))