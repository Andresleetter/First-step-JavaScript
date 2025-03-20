// array

// Declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicializacion

myArray = [1]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ['Andres', 'Gomez']
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = 'Andres'
myArray2[1] = 'Gomez'
myArray2[2] = 23

console.log(myArray2)

// Metodos comunes

myArray = []

// push y pop

myArray.push('Andres')
myArray.push('Gomez')
myArray.push(23)
myArray.push(true)


console.log(myArray)

myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

console.log(myArray.unshift('Andres', 'Gomez'))
console.log(myArray)

// length

console.log(myArray.length)

// clear

// myArray = []
// console.log(myArray)

// slice

let myNewArray = myArray.slice(0, 2)
console.log(myNewArray)

// splice

myArray = ['Andres', 'Gomez', 23, true, 'Andev']

myArray.splice(0, 3)
console.log(myArray)

myArray.splice(0, 2, 3)
console.log(myArray)