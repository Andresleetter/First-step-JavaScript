// 1. Crea una función que retorne a otra función

const greet = function (name) {
  console.log(`Hola, ${name}`)
}

function proccesGreeting (greetFunction, name) {
  greetFunction(name)
}

function returnGreeting () {
  return greet
}

proccesGreeting(greet, 'AndresDev')

// 2. Implementa una función currificada que multiplique 3 números

function mult (...numbers) {
  let result = 1

  for (let number of numbers) {
    result *= number
  }
  return result
}

function curryMul (a) {
  return function (b) {
    return function (c) {
      return mult(a, b, c)
    }
  }
}

const multAB = curryMul(1)(2)

console.log(multAB(3))
console.log(multAB(4))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function potencia (base, exponente) {
  if (exponente === 0) {
    return 1
  }
  return base * potencia(base, exponente - 1)
}

console.log(potencia(5, 5))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter (initialValue = 0) {
  let counter = initialValue

  return {
    increment () {
    counter++
    console.log(`Contador: ${counter}`)
  },
    decrement () {
      counter--
      console.log(`Contador: ${counter}`)
    },
    getValue () {
      return counter
    }
  } 
}

const counter = createCounter(5)
counter.increment()
counter.decrement()
console.log(counter.getValue())

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes (multiplier, ...numbers) {
  let result = 0

  for (let number of numbers) {
    result += number
  }
  return result * multiplier
}

console.log(sumManyTimes(2, 1, 2, 3, 4, 5))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sum (...numbers) {
  let result = 0

  for (let number of numbers) {
    result += number
  }
  return result
}

function processSum (numbers, callback) {
  const result = sum (...numbers)

  callback(result)
}
function processResult (result) {
  console.log(result)
}

processSum([2, 2, 2, 2], processResult)

// 7. Desarrolla una función parcial

function partialMult (a) {
  return function (b, c) {
    return mult(a, b, c)
  }
}

const multWith = partialMult(4)

console.log(multWith(2, 3))

// 8. Implementa un ejemplo que haga uso de Spread

const numbers = [1, 2, 3, 3, 4]

function sumSpread (a, b, c, d, e) {
  return a + b + c + d + e
}

console.log(sumSpread(...numbers))

// 9. Implementa un retorno implícito

const sumImplicit = (a, b) => a + b
console.log(sumImplicit(2, 5))

// 10. Haz uso del this léxico

const handler = {
  name: 'Andres',
  age: 23,
  greeting: function() {
    console.log(`Hola, ${this.name} de ${this.age} anhos`)
  }
}

handler.greeting()