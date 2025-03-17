// 1. Escribe un comentario en una linea

// hola, soy un comentario en una sola linea

// 2. Escribe un comentario en varias lineas

/*
hola,
soy un comentario
multilineas
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let name = "Andres Gomez"
let age = 23
let isBeginner = true
let undefinedValue
let noValue = null
let imSymbol = Symbol("ImSymbol")
let biggerInt = BigInt(8734547876827862477627684768478672476724768782473084674027)

// 4. Imprime por consola el valor de todas las variables

console.log(name)
console.log(age)
console.log(isBeginner)
console.log(undefinedValue)
console.log(noValue)
console.log(imSymbol)
console.log(biggerInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof name)
console.log(typeof age)
console.log(typeof isBeginner)
console.log(typeof undefinedValue)
console.log(typeof noValue)
console.log(typeof imSymbol)
console.log(typeof biggerInt)

// 6. A continuacion, modifica los valores de las variables por otros del mismo tipo

name = "Juan Ovelar"
age = 24
isBeginner = false
undefinedValue = undefined
noValue = null
imSymbol = Symbol("ImnotSymbol")
biggerInt = BigInt(483457623467575275494572758457237847575475987527437752375473074357487237)

// Imprimir valores actualizados

console.log(name);
console.log(age);
console.log(isBeginner);
console.log(undefinedValue);
console.log(noValue);
console.log(imSymbol);
console.log(biggerInt);

// 7. A continuacion, modifica los valores de las variables por otros de distinto tipo

name = 24
age = "ahora soy un string"
isBeginner = null
undefinedValue = Symbol("Ahora soy un símbolo")
noValue = 100n
imSymbol = false
biggerInt = undefined

// Imprimir valores actualizados

console.log(name);
console.log(age);
console.log(isBeginner);
console.log(undefinedValue);
console.log(noValue);
console.log(imSymbol);
console.log(biggerInt);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const name2 = "Andres Gomez"
const age2 = 23
const isBeginner2 = true
const undefinedValue2 = undefined
const noValue2 = null
const imSymbol2 = Symbol("ImSymbol")
const biggerInt2 = BigInt(8734547876827862477627684768478672476724768782473084674027)

// Imprimir valores

console.log(name2);
console.log(age2);
console.log(isBeginner2);
console.log(undefinedValue2);
console.log(noValue2);
console.log(imSymbol2);
console.log(biggerInt2);

// 9. A continuacion, modifica los valores de las constantes

// name2 = "Juan Gomez"
// age2 = 26
// isBeginner2 = false
// undefinedValue2 = undefined
// noValue2 = null
// imSymbol2 = Symbol("ImnotSymbol")
// biggerInt2 = BigInt(873454787682786247762768476847867247632343724768782473084674027)

// 10. comenta las lineas que produzcan algun tipo de error al ejecutarse