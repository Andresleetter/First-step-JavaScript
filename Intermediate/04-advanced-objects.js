// Objetos avanzados

// Prototipos y herencia

// Prototipos

let person = {
  name: "Andres",
  age: 23,
  greet() {
      console.log(`Hola, soy ${this.name}`)
  }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge = function () {
  console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()

// Herencia

let programmer = Object.create(person)
programmer.language = "JavaScript"

programmer.name = "AndresDev"
console.log(person.name)
console.log(person.language)

console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language)
programmer.greet()
programmer.sayAge()

// Metodos estaticos y de instancia

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.greet = function () {
  console.log(`Hola, soy ${this.name}`)
}

let newPerson = new Person("Andres", 23)
newPerson.greet()

// Metodos avanzados

// assign

let personCore = { name: "Andres" }
let personDetails = { age: 23, alias: "AndresDev" }

let fullPerson = Object.assign(personCore, personDetails)
console.log(fullPerson)

// keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))