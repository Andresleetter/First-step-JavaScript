// sintaxis

let person = {
  name: 'Andres',
  age: 23,
  alias: 'AndresDev'
}

// Acceso a propiedades

// Notacion punto

console.log(person.name)

// Notacion de corchetes

console.log(person['name'])

// Modificacion de propiedad

person.name = 'Andres Gomez'
console.log(person.name)

console.log(typeof person.age)
person.age = '23'

console.log(person.age)
console.log(typeof person.age)

// Eliminacion de propiedades

delete person.age

console.log(person)

// Nueva propiedad

person.email = 'ajglkjasjag@gmail.com'
console.log(person)

person['age'] = 23
console.log(person)

// Metodos (funciones)

let person2 = {
  name: 'Andres',
  age: 23,
  alias: 'AndresDev',
  walk: function() {
    console.log('La persona camina')
  }
}
person2.walk()

// Anidacion de objetos

let person3 = {
  name: 'Andres',
  age: 23,
  alias: 'AndresDev',
  walk: function() {
    console.log('La persona camina')
  },
  job: {
    name: 'Programador',
    exp: 1,
    work: function() {
      console.log(`La persona trabaja de ${this.exp} anhos de experiencia trabaja`)
    }
  }
}
console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)

person3.job.work()

// Igualdad de objects

let person4 = {
  name: 'Andres Gomez',
  alias: 'AndresDev',
  email: 'ajglkjasjag@gmail.com',
  age: 23
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// Iteracion

for (let key in person4) {
  console.log(key + ': ' + person4[key])
}

// Funciones como objetos

function Person (name, age) { // Deberia ser una clase
  this.name = name
  this.age = age
}

let person5 = new Person('Andres', 23)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person5)