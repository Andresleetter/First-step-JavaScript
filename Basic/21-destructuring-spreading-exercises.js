// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myArray = [1, 2, 3, 4]

let [myValue0, myValue1] = myArray

console.log(myValue0)
console.log(myValue1)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [myValue2 = 0] = myArray
console.log(myValue2)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
  name: 'Andres',
  age: 23,
  alias: 'AndresDev'
}

let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes

let {name: name3, age: age3, alias: alias3} = person
console.log(name3)
console.log(age3)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

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

// 6. Usa propagación para combinar dos arrays en uno nuevo

let myArray2 = [...myArray, 5, 6]
console.log(myArray2)

// 7. Usa propagación para crear una copia de un array

let myArray3 = [...myArray2]
console.log(myArray3)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let newArray = [...myArray2,...myArray3]
console.log(newArray)

// 9. Usa propagación para crear una copia de un objeto

let person2 = {...person}
console.log(person2)

// 10. Combina desestructuración y propagación

let person4 = {...person,...person2}
console.log(person4)

let { name: name2, age: age2, alias: alias2 } = person4
console.log(name2)
console.log(age2)
console.log(alias2)