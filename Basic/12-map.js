// Map

// Declaracion

let myMap = new Map()
console.log(myMap)

// Inicializacion

myMap = new Map([
  ["name", "Andres"],
  ["last name", "Gomez"],
  ["age", '23'],
])

console.log(myMap)

// Metodos y propiedades

// Set

myMap.set("alias", "AndresDev")
console.log(myMap)

// get

console.log(myMap.get('name'))
console.log(myMap.get('last name'))

// has

console.log(myMap.has('name'))
console.log(myMap.has('email'))

// delete

myMap.set("email", "AndresDev@gmail.com")
console.log(myMap.delete('email'))

// keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear()
console.log(myMap)