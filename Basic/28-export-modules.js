// Exportacion de modulos

// Funciones

// export function add (a, b) {
//   return a + b
// }

// console.log(add(5, 10))

// Propiedades

export const PI = 3.1416

export let name = 'Andres Gomez'

// Exportacion por defecto

export default function substract (a, b) {
  return a - b
}

export class Circle {
  constructor (radius) {
    this.radius = radius
  }
  area () {
    return Math.PI * Math.pow(this.radius, 2)
  }
  perimeter () {
    return 2 * Math.PI * this.radius
  }
}

// export default class MyClass () {

//   funC () {
//     console.log('Mi clase')
//   }
// }

export function multiplication (a, b) {
  return a * b
}

export const age = 23

export class Square {
  constructor (side, width) {
    this.side = side
    this.width = width
  }
  area () {
    return this.side**2
  }
}

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