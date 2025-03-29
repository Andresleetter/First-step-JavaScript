/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function fizzBuzz () {
  for (let number = 1; number <= 100; number++) {
    let output = ''

    if (number % 3 === 0) output += 'Fizz'
    if (number % 5 === 0) output += 'Buzz'

    console.log(output || number)
  }
}



function fizzBuzzTernario () {
  for ( let i = 1; i <= 100; i++ ) {
    console.log(( i % 3 === 0 ? (i & 5 === 0) ? 'FizzBuzz' : 'Fizz' : ( i % 5 === 0 ? 'Buzz' : i )))
  }
}

fizzBuzzTernario()