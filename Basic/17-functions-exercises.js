// 1. Crea una función que reciba dos números y devuelva su suma

function sum (a, b) {
  return a + b
}

console.log(sum(5, 5))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function higherNum (array) {
  let higher = array[0]
  array.forEach (value => {
    if (value > higher) {
      higher = value
    }
  })
  return higher
}

let array = [1, 2, 3, 4, 5]

console.log(higherNum(array))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function stringFunc (input) {
  return input.split('').reduce((count, char) => {
    if (vowels.includes(char)) {
      count += 1
    }
    return count
  }, 0)
}

const string = 'Hello, JavaScript'
const vowels = 'aeiouAEIOU'

console.log('La cantidad de vocales en el string es: ', stringFunc(string))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado