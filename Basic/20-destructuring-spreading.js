let myArray = [1, 2, 3, 4]

let person = {
  name: 'Andres',
  age: 23,
  alias: 'AndresDev'
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Desestructuracion

// Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray 
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis de arrays con valores predeterminandos

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos array

let [myValue10, , , myValue13] = myArray 
console.log(myValue10)
console.log(myValue13)

// Sintaxis objects

let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis de objects con valores predeterminandos

let {name2, age2, alias2, email = 'ajglkjasjag@gmail.com'} = person
console.log(name2)
console.log(age2)
console.log(alias2)
console.log(email)

// Sintaxis objects con nuevos nombres de variables

let {name: name3, age: age3, alias: alias3} = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objetos anidados

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

let { name: name4, job: {name: jobName} } = person3
console.log(name4)
console.log(jobName)

// Propagacion (...)

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6]
console.log(myArray2)

let myArray3 = [...myArray]
console.log(myArray3)

// Combinacion de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)

// Sintaxis objects

let person4 = {...person, email: 'ajglkjasjag@gmail.com'}
console.log(person4)

// copia de objects

let person5 = {...person}
console.log(person5)