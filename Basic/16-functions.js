function myFunction () {
  console.log('Hello, function')
}

myFunction()

for (let i = 0; i < 5; i++) {
  myFunction()
}

// con parametros

function myFunctionP (name) { // funcion con parametros
  console.log(`Hello, ${name}`)
}

myFunctionP('Andres')

// funciones anonimas

const myFunc = function(name) {
  console.log(`Hello, ${name}`)
}

myFunc('Andres Gomez')

// arrow function

const myFunct = (name) => {
  console.log(`Hello, ${name}`)
}

const myFuncti = (name) => console.log(`Hello, ${name}`)

myFunct('Andres Gomez')
myFuncti('Andres Gomez')

// parametros

function sum (a, b) {
  console.log(a + b)
}

sum(5, 10)

function defaultSum (a = 0, b = 0) {
  console.log(a + b)
}

defaultSum(5)

// retorno de valores

function mult (a, b) {
  return a * b
}

let result = mult(5, 10)
console.log(result)

// funciones anidadas

function extern () {
  console.log('Extern function')
  function intern () {
    console.log('Intern function')
  }
  intern()
}

extern()
// intern() Error: esta fuera del scope

// funciones de orden superior

function applyFunc (func, param) {
  func(param)
}

applyFunc (myFuncti, ('Higher order function'))

// forEach

myArray = [1, 2, 3, 4]
mySet = new Set(['Andres', 'Gomez', 23, true, 'Andev'])
myMap = new Map([
  ["name", "Andres"],
  ["last name", "Gomez"],
  ["age", '23'],
])

myArray.forEach((value) => console.log(value))

myArray.forEach(function (value) {
  console.log(value)
})

mySet.forEach(function (value) {
  console.log(value)
})

myMap.forEach(function (keys, value) {
  console.log(value, keys)
})