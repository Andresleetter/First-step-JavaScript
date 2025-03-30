/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function primeBetween () {

  const primos = []

  for (let numero = 2; numero <= 100; numero++) {
    let esPrimo = true

    for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
      if (numero % divisor === 0) {
        esPrimo = false
        break
      }
    }
    if (esPrimo) {
      primos.push(numero)
    }
  }
  return primos
}

const resultado = primeBetween()
console.log(resultado.join(', '))