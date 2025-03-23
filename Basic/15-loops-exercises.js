// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 0; i <= 20; i++) {
  console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let result = 0

for (let i = 0; i <= 100; i++) {
  result += i
}

console.log(result)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

name = ['Andres', 'Antonio', 'William', 'Yemina', 'Nara']

for (let value of name) {
  console.log(value)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let string = 'me gusta el futbol y los deportes de contacto'
let count = 0
let vocales = 'aeiouAEIOU'

for (let value of string) {
  if (vocales.includes(value)) {
    count++
  }
}

console.log('La canticad de vocales encontradas de la cadena: ' + string, 'es :' + count)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 23, 54]
let multResult = 1
for (let value of numbers) {
  multResult *= value
}

console.log(multResult)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let num = 5

for (let multiplier = 1; multiplier <= 10; multiplier++) {
  let multResult = multiplier * num
  console.log(`${num} x ${multiplier}: ${multResult}`)
}

// 8. Usa un bucle para invertir una cadena de texto

let reversedString = ''

for (let char of string) {
  reversedString = char + reversedString
}

console.log(reversedString)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibList = [0, 1]
let numFib = 10

for (let i = 2; i <= numFib; i++) {
  fibList.push(fibList[i - 1] + fibList[i - 2])
}

console.log(fibList)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let newNumbers = []

for (let num of numbers) {
  if (num > 10) {
    newNumbers.push(num)
  }
}

console.log(newNumbers)