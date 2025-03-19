// Condicionales (estrucuturas de control)

// if, else if, else

let age = 23
if (age === 23) {
  console.log('La edad es 23')
}

// else

if (age === 18) {
  console.log('La edad es 23')
} else {
  console.log('La edad no es 23')
}

// else if

if (age == 18) {
  console.log('La edad es 23')
} else if (age < 18) {
  console.log('Es menor de edad')
} else {
  console.log('Es mayor de edad')
}

// Operador ternario

const message = age === 23 ? 'La edad es 23' : 'La edad no es 23'
console.log(message)

// switch

let day = 5
let datName

switch (day) {
  case 0:
    dayName = 'Lunes'
    break
  case 1:
    dayName = 'Martes'
    break
  case 2:
    dayName = 'Miercoles'
    break
  case 3:
    dayName = 'Jueves'
    break
  case 4:
    dayName = 'Viernes'
    break
  case 5:
    dayName = 'Sabado'
    break
  case 6:
    dayName = 'Domingo'
    break
  default:
    dayName = 'Numero de dia incorrecto'
}

console.log(dayName)