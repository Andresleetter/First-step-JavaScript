// Operadores

// Operadores Aritmeticos

let a = 5
let b = 10

console.log(a + b) // Suma 
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division

console.log(a % b) // Modulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignacion

let myVariable = 2
console.log(myVariable)

myVariable += 2
console.log(myVariable)

// Operadores de comparacion 

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)

console.log(a == 6)   // Igualdad por valor 
console.log(a == a)   //
console.log(a == "6") //

console.log(a === 6)  // Igualdad por identidad (por tipo y valor)
console.log(a === a)  //
console.log(a === "6")//

console.log(a != 6)   // Negacion por valor
console.log(a !== "6")// Negacion por identidad

// Operadores logicos

// and (&&)

console.log(5 > 10 && 15 > 20)  // false + false = false
console.log(5 < 10 && 15 < 20)  // true + true = true
console.log(5 > 10 && 15 < 20)  // false + true = false
  
// or (||)

console.log(5 > 10 || 15 > 20)  // false + false = false
console.log(5 < 10 || 15 < 20)  // true + true = true
console.log(5 > 10 || 15 < 20)  // false + true = true

// not (!)

console.log(!(5 > 10 && 15 > 20))  // ! (false + false = false) = true
console.log(!(5 < 10 || 15 < 20))  // ! (true + true = true) = false

// Operadores ternarios

const isRaining = true

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")

const isRaining2 = false

isRaining2 ? console.log("Esta lloviendo") : console.log("No esta lloviendo")