// String

let myName = "Andres"
let greeting = "Hola," + myName

console.log(greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[1])

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.includes("Hola"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Andres", "AndresDev"))

// Template literals (plantillas literales)

let message = `Hola,
estoy aprendiendo JavaScript`

console.log(message)

let email = "ahdlfhal@gmail.com"

console.log(`Hola, ${myName}!. Tu email es: ${email}`)