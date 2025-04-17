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

// 5. Utiliza la operación assign en un objeto

// 6. Crea una clase abstracta

// 7. Utiliza polimorfismo en dos clases diferentes

// 8. Implementa un Mixin

// 9. Crea un Singleton

// 10. Desarrolla un Proxy