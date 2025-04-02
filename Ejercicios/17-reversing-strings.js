/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function reversingString (string) {
  return string.split('').reverse().join('')
}

let string = ('Hola mundo')
console.log(reversingString(string))