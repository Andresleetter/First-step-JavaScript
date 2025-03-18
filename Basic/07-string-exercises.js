// 1. Concatena dos cadenas de texto

let myName = 'Andres Gomez'
let myGreeting = 'Hola, ' + myName

console.log(myGreeting)

// 2. Muestra la longitud de una cadena de texto

console.log(myGreeting.length)

// 3. Muestra el primer y ultimo caracter de un string

console.log(myGreeting[0], myGreeting.slice(-1))

// 4. Convierte en mayuscula y minuscula un string

console.log(myGreeting.toUpperCase())
console.log(myGreeting.toLowerCase())

// 5. Crea una cadena de texto en varias lineas

myWord = `hola,
como puedes ver soy una cadena
de texto multilineas`
console.log(myWord)

// 6. Interpola el valor de una variable en un string

let myMessage = 'que tengas un buen dia'

console.log(`Hola, ${myName}, ${myMessage}!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(myGreeting.replaceAll(' ', '-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(myGreeting.includes('Hola'))

// 9. Comprueba si dos strings son iguales

string1 = 'Juan'
string2 = 'Juan'
string3 = 'Gomez'

console.log(string1 === string2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(string1.length === string3.length)