// 1. Imprime por consola tu nombre si una variable toma su valor 

let name = 'Andres'

if (name === 'Andres') {
  console.log('Andres')
}

// 2. Imprime por consola un mensaje si el usuario y contrasena concide con unos establecidos

let usuario = 'andev'
let contrasena = '12345'

if (usuario === 'andev' && contrasena === '12345') {
  console.log('El usuario y contrasena conciden')
} else {
  console.log('El usuario y contrasena no conciden')
}

// 3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje

let num = 19

if (num > 0) {
  console.log('El numero es positivo')
} else if (num < 0) {
  console.log('El numero es negativo')
} else {
  console.log('El numero es 0')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos anos le falta 

let age = 18
let agePermitted = 18

if (age >= 18) {
  console.log('Tiene la posibilidad de votar')
} else {
  missing = agePermitted - age
  console.log(`No tiene la posibilidad de votar le falta ${missing} anos`)
}

// 5. Usa el operador ternario para asignar el valor 'adulto' o 'menor' a una variable dependiendo de la edad

const message = age >= 18 ? 'Es adulto' : 'Es menor'
console.log(message)

// 6. Muestra en que estacion del ano nos encontramos dependiendo del valor de una variable 'mes'

let mes = 3; // Cambia este valor para probar (1 para enero, 2 para febrero, etc.)

if (mes === 12 || mes === 1 || mes === 2) {
  console.log("Estamos en verano")
} else if (mes === 3 || mes === 4 || mes === 5) {
  console.log("Estamos en otoño")
} else if (mes === 6 || mes === 7 || mes === 8) {
  console.log("Estamos en invierno")
} else if (mes === 9 || mes === 10 || mes === 11) {
  console.log("Estamos en primavera")
} else {
  console.log("Mes inválido. Debe estar entre 1 y 12.")
}

// 7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior 

if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
  console.log("El mes tiene 31 días.")
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
  console.log("El mes tiene 30 días.")
} else if (mes === 2) {
  console.log("El mes tiene 28 días (o 29 en años bisiestos).")
} else {
  console.log("Mes inválido. Debe estar entre 1 y 12.")
}

// 8. Usa un switch para imprimir un mensaje de saludo diferentes dependiendo del idioma

let idioma = "es"

switch (idioma) {
  case "es":
    console.log("¡Hola! ¿Cómo estás?")
    break
  case "en":
    console.log("Hello! How are you?")
    break
  case "fr":
    console.log("Bonjour! Comment ça va?")
    break
  case "de":
    console.log("Hallo! Wie geht's?")
    break
  default:
    console.log("Idioma no reconocido. Por favor selecciona uno válido.")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6 

switch (mes) {
  case 12:
  case 1:
  case 2:
    console.log("Estamos en verano")
    break
  case 3:
  case 4:
  case 5:
    console.log("Estamos en otoño")
    break
  case 6:
  case 7:
  case 8:
    console.log("Estamos en invierno")
    break
  case 9:
  case 10:
  case 11:
    console.log("Estamos en primavera")
    brea
  default:
    console.log("Mes inválido. Debe estar entre 1 y 12.")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("El mes tiene 31 días")
    break
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("El mes tiene 30 días")
    break
  case 2:
    console.log("El mes tiene 28 días (o 29 en años bisiestos)")
    break
  default:
    console.log("Mes inválido Debe estar entre 1 y 12")
}