class Person {
  constructor (name, age, alias) {
    this.name = name
    this.age = age
    this.alias = alias
  }
}

// Sintaxis

let person = new Person('Andres', 23, 'AndresDev')
let person2 = new Person('Andres', 23, 'AndresDev')

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {
  constructor (name = 'Sin nombre', age = 0, alias = 'Sin alias') {
    this.name = name
    this.age = age
    this.alias = alias
  }
}

let person3 = new DefaultPerson ('Andres', 23)

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3['alias'])

person3.alias = 'AndresDev'

console.log(person3.alias)

// Funciones

class PersonWithMethod {
  constructor (name, age, alias) {
    this.name = name
    this.age = age
    this.alias = alias
  }
  walk() {
    console.log('La persona camina')
  }
}

let person4 = new PersonWithMethod ('Andres', 23, 'AndresDev')
person4.walk()

// Propiedades privadas

class PrivatePerson {
  
  #bank

  constructor (name, age, alias, bank) {
    this.name = name
    this.age = age
    this.alias = alias
    this.#bank = bank
  }
  pay () {
    this.#bank
  }
}

let person5 = new PrivatePerson ('Andres', 23, 'AndresDev', 'A3R34432434')

// No se puede acceder
// console.log(person5.bank)
// person5.bank = 'new A3R34432434' // bank no es #bank

console.log(person5)

// Getters y Setters

class GetPerson {

  #name
  #age
  #alias
  #bank

  constructor (name, age, alias, bank) {
    this.#name = name
    this.#age = age
    this.#alias = alias
    this.#bank = bank
  }
  get name () {
    return this.#name
  }
}

class GetSetPerson {

  #name
  #age
  #alias
  #bank

  constructor (name, age, alias, bank) {
    this.#name = name
    this.#age = age
    this.#alias = alias
    this.#bank = bank
  }
  get name () {
    return this.#name
  }
  set bank (bank) {
    this.#bank = bank
  }
  get bank () {
    return this.#bank
  }
}

person6 = new GetPerson ('Andres', 23, 'AndresDev', 'A3R34432434')

console.log(person6)
console.log(person6.name)

person6.bank = 'new A3R34432434'
console.log(person6.bank)

// Herencia

class Animal {
  constructor (name) {
    this.name = name
  }
  sound () {
    console.log('Emite un sonido generico')
  }
}

class Dog extends Animal {
  sound () {
    console.log('GUAU')
  }
  run () {
    console.log('El perro corre')
  }
}

class Fish extends Animal {
  constructor (name, size) {
    super (name)
    this.size = size
  }
  swim () {
    console.log('El pez nada')
  }
  sound () {
    console.log('GLUGLU')
  }
}

let myDog = new Dog ('AndiDog')
myDog.run ()
myDog.sound ()

let myFish = new Fish ('AndiFish', 10)
myFish.swim ()
myFish.sound ()

// Metodos estaticos

class MathOperation {
  static sum (a, b) {
    return a + b
  }
}

console.log(MathOperation.sum(5, 10))