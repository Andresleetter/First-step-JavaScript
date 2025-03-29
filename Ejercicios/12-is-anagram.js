/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

import { createInterface } from 'readline'

function anagram(string1, string2) {

  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  if (string1 === string2) {
    return false;
  }

  return string1.split('').sort().join('') === string2.split('').sort().join('')

}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Ingresa la primera cadena: ', (string1) => {
  rl.question('Ingresa la segunda cadena: ', (string2) => {
    const result = anagram(string1, string2)
    console.log(`¿Son anagramas?: ${result}`)
    rl.close()
  })
})