// 1. Exporta una función

/*
export function multiplication (a, b) {
  return a * b
}
*/ 

import { multiplication, age, Square } from './28-export-modules.js'

// 2. Exporta una constante

// export const age = 23

// 3. Exporta una clase

/*
export class Square {
  constructor (side, width) {
    this.side = side
    this.width = width
  }
  area () {
    return this.side**2
  }
}
*/

// 4. Importa una función

console.log(multiplication(10, 10))

// 5. Importa una constante

console.log(age)

// 6. Importa una clase

let square = new Square (5, 5)
console.log(square.side)
console.log(square.width)
console.log(square.area().toFixed(2))

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

/*
export default function division (a, b) {
  return a / b
}

export default const book = 'Biblioteca de la media noche'

export default class Triangle {
  constructor (base, height) {
    this.base = base
    this.height = height
  }
  area () {
    return (this.base * this.height) / 2
  }
}
*/

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

/*
import division, { book, Triangle } from './28-export-modules.js'
console.log(division(10, 5))
console.log(book)
const triangle = new Triangle(10, 5);
console.log(triangle.area())
*/

// 9. Exporta una función, una constante y una clase desde una carpeta



// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

import { letter, text, LetterClass } from '../Ejercicios/10-ejercicio.js'

console.log(text)

console.log(letter('Javascript'))
console.log(letter('python'))

let newLetter = new LetterClass('JavaScript');
console.log(newLetter.letterFunc())