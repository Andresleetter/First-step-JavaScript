// 1. Crea un función que utilice error correctamente

function division (a, b) {
  if (b === 0) {
    console.error('No se puede dividir entre cero')
    return null 
  }
  return a / b
}

// 2. Crea una función que utilice warn correctamente

function divisionWarn (a, b) {
  if (b === 0) {
    console.warn('No se permite dividir entre cero')
    return null
  }
  return a / b
}

// 3. Crea una función que utilice info correctamente

function divisionInfo (a, b) {
  if (b === 0) {
    console.info('Estas intentando dividir entre cero')
    return null
  }
  return a / b
}

// 4. Utiliza table

const data = [
  { nombre: 'Andrés', edad: 25 },
  { nombre: 'María', edad: 30 },
  { nombre: 'Juan', edad: 35 }
]

console.table(data)

// 5. Utiliza group

function operacionesMatematicas() {
  console.group('Operaciones matemáticas')
  console.log('Suma: ', 5 + 3)
  console.log('Resta: ', 5 - 3)
  console.log('Multiplicación: ', 5 * 3)
  console.groupEnd()
}

operacionesMatematicas()

// 6. Utiliza time

console.time('Tiempo de ejecución')

let suma = 0
for (let i = 0; i < 1000000; i++) {
  suma += i
}

console.timeEnd('Tiempo de ejecución')

// 7. Valida con assert si un número es positivo

function validarPositivo(numero) {
  console.assert(numero > 0, `El número ${numero} no es positivo`)
}

validarPositivo(-5)

// 8. Utiliza count

function contarLlamadas() {
  console.count('Función llamada')
}

contarLlamadas()
contarLlamadas()
contarLlamadas()

// 9. Utiliza trace

function primeraFuncion() {
  segundaFuncion()
}

function segundaFuncion() {
  console.trace('Traza de la ejecución')
}

primeraFuncion()

// 10. Utiliza clear

// console.clear()
// console.log('Consola limpia y lista para nuevos mensajes.')