// 1. Crea un objeto con 3 propiedades

let student = {
  name: 'Andres Gomez',
  age: 23,
  registration: true
}

// 2. Accede y muestra su valor

console.log(student)

// 3. Agrega una nueva propiedad

student.email = 'ajglkjasjag@gmail.com'

// 4. Elimina una de las 3 primeras propiedades

delete student.registration

console.log(student)

// 5. Agrega una función e invócala

let student2 = {
  name: 'Andres Gomez',
  age: 23,
  email: 'ajglkjasjag@gmail.com',
  status: function() {
    console.log('The student is erolled')
  }
}

student2.status()

// 6. Itera las propiedades del objeto

for (let key in student2) {
  console.log(key + ': ' + student2[key])
}

// 7. Crea un objeto anidado

let student3 = {
  name: 'Andres Gomez',
  age: 23,
  email: 'ajglkjasjag@gmail.com',
  status: function() {
    console.log('The student is erolled')
  },
  enrroled: {
    registration: true,
    semester: 7,
    career: function() {
      console.log('Computer science career')
    }
  }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(student3.enrroled.registration)
student3.enrroled.career()

// 9. Comprueba si los dos objetos creados son iguales

console.log(student2 === student3)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(student2.name === student3.email)