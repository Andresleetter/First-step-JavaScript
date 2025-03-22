// for

for (let i = 0; i < 5; i++) {
  console.log('Hola')
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
  console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0

while (i < 5) {
  console.log(`Hola ${i}`)
  i++
}

// while (true) { // bucle infinito

// }

do {
  console.log(`Hola ${i}`)
  i++
} while (i < 5) 

// for of

myArray = [1, 2, 3, 4]
mySet = new Set(['Andres', 'Gomez', 23, true, 'Andev'])
myMap = new Map([
  ["name", "Andres"],
  ["last name", "Gomez"],
  ["age", '23'],
])
myString = 'Hola, JavaScript'

for (let value of myArray) {
  console.log(value)
}

for (let value of mySet) {
  console.log(value)
}

for (let value of myMap) {
  console.log(value)
}

for (let value of myString) {
  console.log(value)
}

// Buenas practicas

// break y continue

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue
  } else if (i == 7) {
      break
  }
  console.log(`Hola ${i}`)
}