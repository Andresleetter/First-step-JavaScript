// 1. Crea una variable para cada operacion aritmetica

let x = 20
let y = 10

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

console.log(x % y)
console.log(x ** y)

// 2. Crea una variable para cada tipo de operaciones de asignacion, que haga uso de las variables utilizadas para las operaciones aritmeticas

let imVariable = 10

console.log(imVariable += 10)
console.log(imVariable -= 10)
console.log(imVariable *= 10)
console.log(imVariable /= 10)
console.log(imVariable %= 10)
console.log(imVariable **= 10)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion

console.log(x > y)
console.log(x >= y)
console.log(x != y)
console.log(y < x)
console.log(y <= x)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion

console.log(x < y)
console.log(x <= y)
console.log(x != x)
console.log(x == y)
console.log(y > x)

// 5. Utiliza el operador logico and

console.log(x > y && y < x)

// 6. Utiliza el operador logico or

console.log(x > y || y < x)

// 7. Combina ambos operadores logicos

console.log(x > y && y > x || y < x )

// 8. Añade alguna negacion

console.log(!(x > y && y > x || y < x ))

// 9. Utiliza el operador ternario

const itsSunny = true

itsSunny ? console.log("Esta soleado") : console.log("No esta soleado")

// 10. Combina operadores aritmeticos, de comparacion y logicos

console.log(x + y == x || x > y)