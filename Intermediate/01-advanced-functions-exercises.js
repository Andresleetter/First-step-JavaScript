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

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico