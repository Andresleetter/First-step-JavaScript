// 1. Crea un array que almacene cinco animales

let animalsArray = ['leon', 'mono', 'tigre', 'oso', 'conejo']

// 2. Añade dos más. Uno al principio y otro al final

animalsArray.unshift('lobo')
animalsArray.push('leopardo')

console.log(animalsArray)

// 3. Elimina el que se encuentra en tercera posición

animalsArray.splice(3, 1)
console.log(animalsArray)

// 4. Crea un set que almacene cinco libros

let bookSet = new Set(['biblioteca de la medianoche', 'flow', 'generacion idiota', 'meditaciones', 'los 4 acuerdos'])
console.log(bookSet)

// 5. Añade dos más. Uno de ellos repetido

bookSet.add('biblioteca de la medianoche', '1986')
console.log(bookSet)

// 6. Elimina uno concreto a tu elección

bookSet.delete('biblioteca de la medianoche')
console.log(bookSet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let mapMonth = new Map([
  ['1', 'enero'],
  ['2', 'febrero'],
  ['3', 'marzo'],
  ['4', 'abril'],
  ['5', 'mayo'],
  ['6', 'junio'],
  ['7', 'julio'],
  ['8', 'agosto'],
  ['9', 'setiembre'],
  ['10', 'octubre'],
  ['11', 'noviembre'],
  ['12', 'diciembre']
])

console.log(mapMonth)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mapMonth.has('5'))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

mapMonth.set('verano', [12, 1, 2])

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let imArray = [1, 2, 3, 4, 5]
console.log(imArray)

imLet = new Set(imArray)
console.log(imLet)

let imMap = new Map([...imLet].map(valor => [valor, valor]))
console.log(imMap)