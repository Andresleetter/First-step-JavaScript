// Estructuras avanzadas

// Arrays avanzados

// Metodos funcionales

// foreach

let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element => console.log(element))

// map 

let doubled = numbers.map(element => element * 2)
console.log(doubled)

// filter

let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// reduce

let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum)

// Manipulacion

// flat

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)

let flatArray = nestedArray.flat(1)
console.log(flatArray)

flatArray = nestedArray.flat(2)
console.log(flatArray)

flatArray = nestedArray.flat(3)
console.log(flatArray)

// flatMap

let phrases = ["Hola mundo", "Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)

// Ordenacion

// sort

let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b)

console.log(sorted)

// reverse

sorted.reverse()
console.log(sorted)

// Busqueda

// includes

console.log(sorted.includes(4))
console.log(sorted.includes(5))

// find

let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)

// findIndex

let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)

// Sets avanzados

// Operaciones

// Eliminacion de duplicados

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]

numbersArray = [...new Set(numbersArray)]
console.log(numbersArray)

// Union

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union)

// Intersección

const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)

// Diferencia

const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)

// Conversion

// Set a Array

console.log([...setA])

// Iteracion

// forEach

setA.forEach(element => console.log(element))

// Maps avanzados

// Iteracion

let myMap = new Map([
  ["name", "AndresDev"],
  ["age", 23]
])

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// Conversion

// Map a Array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// Map a Objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)