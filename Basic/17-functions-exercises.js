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

function uperArray (array) {
  return array.map(element => element.toUpperCase())
}

array = ['Andres', 'programador', 'JavaScript', 'gato']
let newArray = uperArray(array)

console.log(newArray)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function identifyPrime(n){
  if (n < 2) return false

  for (let divider = 2; divider * divider <= n; divider++){
    if (n % divider === 0){
      return false
    }
  }
  return true
}

console.log(identifyPrime(11))
console.log(identifyPrime(15))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function commonElements(array, array2){
  return array.filter(element => array2.includes(element))
}

array = ['Andres', 'programador', 'JavaScript', 'gato']
let array2 = ['Andres', 'programador', 'leon', 'edificio']
newArray = commonElements(array, array2)

console.log(newArray)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumPairs (array) {
  return array.reduce((sum, element) => {
    if (element % 2 === 0) {
      return sum + element
    }
    return sum
  }, 0)
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sumPairs(array))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function squaredArray (array) {
  return array.map(element => element**2)
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
newArray = squaredArray(array)

console.log(newArray)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function reverseString (words) {
  return words.split('').reverse().join('')
}

let words = 'Hello, JavaScript'

console.log(reverseString(words))

// 10. Crea una función que calcule el factorial de un número dado

function factorial (n) {
  if (n < 0) return 'El factorial de numeros negativos no existe'

  if (n === 0) {
    return 1
  }
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
  }
  return result
}

console.log(factorial(10))