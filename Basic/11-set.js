// set

// Declaracion

let mySet = new Set()
console.log(mySet)

mySet = new Set(['Andres', 'Gomez', 23, true, 'Andev'])
console.log(mySet)

// Metodos comunes

// add y delete

mySet.add('Estudiante')
console.log(mySet)

mySet.delete(true)
console.log(mySet)

// has

console.log(mySet.has('Andres'))

// size

console.log(mySet.size)

// Covertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Covertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// Los set no admiten duplicados (los valores son unicos)

mySet.add('Andres') 
console.log(mySet)

