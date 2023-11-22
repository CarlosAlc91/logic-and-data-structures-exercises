/* 

* Dado un texto y una busqueda, censurar todas las coincidencias de la busqueda en el texto con [-CENSURADO-]

* Si texto y la busqueda estan vacios mostrar "No puedes leer el texto y la busqueda" en el caso de que ambos parametros no lleguen
*/

let text = 'This is a text'
let searching = 'A'

function censoredText(text = false, searching = false) {
  console.log(text, searching)
  let result = ''
  if (!text && !searching) {
    result = `Cannot read text nor searching`
  } else if (!text && searching) {
    result = `Cannot read text`
  } else if (text && !searching) {
    result = `Cannot read searching`
  } else if (text && searching) {
    result = text.replace(new RegExp(searching, 'gi'), '[-censored-]')
  }

  return result
}

console.log(censoredText(text, searching))