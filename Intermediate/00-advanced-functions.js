// Funciones avanzadas

// Ciudadanos de primera clase

const greet = function (name) {
  console.log(`Hola, ${name}`)
}

greet('Andres')

function proccesGreeting (greetFunction, name) {
  greetFunction(name)
}

function returnGreeting () {
  return greet
}

proccesGreeting(greet, 'AndresDev')

const greet2 = returnGreeting()
greet2('Andres Gomez')

// Arrow functions avanzadas
// Retorno implicito

const multiply = (a, b) => a * b
console.log(multiply(2, 5))

// This lexico

const handler = {
  name: 'Andres',
  greeting: function() {
    console.log(`Hola, ${this.name}`)
  },
  arrowGreeting: () => {
    console.log(`Hola, ${this.name}`)
  }
}

handler.greeting()
handler.arrowGreeting();

// IIFE (Expresion de funcion invocada inmediatamente)

(function () {
  console.log('IIFE clasico')
}) ();

(() => {
  console.log('IIFE con arrow function')
})();

// Parametros Rest (...)

function sum (...numbers) {
  let result = 0

  for (let number of numbers) {
    result += number
  }
  return result
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))

// Operador Spread (...)

const numbers = [1, 2, 3]

function sumWithSpread (a, b, c) {
  return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // sin Spread
console.log(sumWithSpread(...numbers)) // con Spread

// Closures (clausuras)

function createCounter () {
  let counter = 0
  return function executeCounter () {
    counter++
    console.log(`Contador: ${counter}`)
  }
}

const counter = createCounter()

counter()
counter()

// Recursividad

function factorial (n) {
  if (n <= 1) {
    return 1
  }
  return n * factorial(n - 1)
}

console.log(factorial(5))

// funciones parciales

function partialSum (a) {
  return function (b, c) {
    return sum(a, b, c)
  }
}

const sumWith = partialSum(4)

console.log(sumWith(2, 3))
console.log(sumWith(1, 2))

// Currying

function currySum (a) {
  return function (b) {
    return function (c) {
      return sum(a, b, c)
    }
  }
}

const sumAB = currySum(1)(2)

console.log(sumAB(3))
console.log(sumAB(4))

// callbacks

function processData (data, callback) {
  const result = sum(...data)
  callback(result)
}

function processResult (result) {
  console.log(result)
}

function processResult2 (result) {
  console.log(`Mi resultado es: ${result}`)
}

processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (result) => {
  console.log(`Mi resultado con Arrow function es: ${result}`)
})