// log

console.log('Hola, JavaScript')

// error

console.error('Este es un mensaje de error')
console.error('Error al conectarse a la base de datos: ', new Error('Conexion fallida'))

// warm

console.warn('Este es un mensaje de advertencia')

// info

console.info('Este es un mensaje de informacion adicional')

// table

let data = [
  ['Andres', 23],
  ['Juan', 21]
]

console.table(data)

data = [
  { name: 'Andres', age: 23 },
  { name: 'Juan', age: 21 }
]

console.table(data)

// group

console.group('Usuario: ')
console.group('Nombre: Andres')
console.group('Edad: 23')
console.groupEnd()

// time

console.time('Tiempo de ejecucion')

for (let i = 0; i < 1000; i++) {

}

console.timeEnd('Tiempo de ejecucion')

console.time('Tiempo de ejecucion2')

for (let i = 0; i < 1000; i++) {

}

console.timeEnd('Tiempo de ejecucion2')

// assert

let age = 17

console.assert(age >= 18, 'El usuario debe ser mayor de edad')

// count 

console.count('Click')
console.count('Click')
console.count('Click')
console.countReset('Click')
console.count('Click')

// trace

function funcA () {
  funcB ()
}

function funcB () {
  console.trace('Seguimiento de la ejecucion')
}

funcA()

// clear

// console.clear()