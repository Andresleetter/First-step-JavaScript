// 1. Agregega una función al prototipo de un objeto

let users = {
  ID: 1234,
  name: 'Andres',
  age: 23,
  cc: 12345678910,
  creditCard () {
    console.log(this.cc)
  }
}

Object.setPrototypeOf(users, {
  ...Object.getPrototypeOf(users),
  getDetails() {
    return `Usuario:\nID: ${this.ID}, Nombre: ${this.name}, Edad: ${this.age}`
  }
})

console.log(users.getDetails())

// 2. Crea un objeto que herede de otro

let userJob = Object.create(users)
userJob.job = 'Programer'

console.log(userJob)
console.log(users)
console.log(userJob.getDetails())

// 3. Define un método de instancia en un objeto

function Users(name, age) {
  this.name = name
  this.age = age
}

Users.prototype.greet = function () {
  console.log(`Hola, soy ${this.name} y tengo ${this.age} años`)
}

let newPerson = new Users("Andres", 23)
newPerson.greet()

// 4. Haz uso de get y set en un objeto

let person = {
  _name: 'Andres Gomez',
  age: 23,
  get name () {
    return `Nombre: ${this._name}`
  },
  set name (newName) {
    this._name = newName
  }
}

console.log(person.name)
person.name = 'Juan Ovelar'

console.log(person.name)

// 5. Utiliza la operación assign en un objeto

let personCore = { name: "Andres" }
let personDetails = { age: 23, alias: "AndresDev" }

let fullPerson = Object.assign(personCore, personDetails)
console.log(fullPerson)

// 6. Crea una clase abstracta

class Animal {
  constructor() {
    if (this.constructor === Animal) {
      throw new Error("No se puede instanciar una clase abstracta.")
    }
  }

  hacerSonido() {
    throw new Error("El método hacerSonido debe ser implementado en la subclase.")
  }
}

// 7. Utiliza polimorfismo en dos clases diferentes

class Perro extends Animal {
  constructor() {
    super()
    this.nombre = "Perro"
  }

  hacerSonido() {
    return "¡Guau!"
  }
}

class Gato extends Animal {
  constructor() {
    super()
    this.nombre = "Gato"
  }

  hacerSonido() {
    return "¡Miau!"
  }
}

// Función polimórfica
function emitirSonido(animal) {
  console.log(animal.hacerSonido())
}

const perro = new Perro()
const gato = new Gato()

emitirSonido(perro)
emitirSonido(gato)

// 8. Implementa un Mixin
const MovilidadMixin = {
  mover() {
    console.log(`${this.nombre} está moviéndose.`)
  }
}

// Aplicamos el mixin sin redefinir las clases
Object.assign(Perro.prototype, MovilidadMixin)
Object.assign(Gato.prototype, MovilidadMixin)

perro.mover()
gato.mover()

// 9. Crea un Singleton

// 10. Desarrolla un Proxy