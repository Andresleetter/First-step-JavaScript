// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let numbers = [10, 8, 5, 2, 1, 11, 34, 56, 9]

let squared = numbers.map(element => element ** 2)
console.log(`\nlos numeros elevados a 2 de [${numbers}] son: [${squared}]\n`)

let twoDigits = numbers.filter(element => element >= 10)
console.log(`los numeros de dos digitos en [${numbers}] son: [${twoDigits}]\n`)

let dif = numbers.reduce((result, current) => result - current)
console.log(`la diferencia entre [${numbers}] es: [${dif}]\n`)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let newArray = numbers
  .map(element => element ** 3)
  .filter(element => element % 2 === 0)

console.log(newArray)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

let deepArray = [[1, 2], [3, [4, 5, [6, 7]]]]
console.log(deepArray)

let flattenedOnce = deepArray.flat(1); 
console.log(flattenedOnce)

let flattenedTwice = deepArray.flat(2); 
console.log(flattenedTwice)

numbers = [1, 2, 3, 4, 5]
let squaredAndGrouped = numbers.flatMap(num => [num, num ** 2])
console.log(squaredAndGrouped)

// 4. Ordena un array de números de mayor a menor

numbers = [10, 8, 5, 2, 1, 11, 34, 56, 9]

let sortedArray = numbers.sort((a, b) => a - b)
console.log(sortedArray)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

let set1 = new Set([1, 2, 3, 4, 5])
let set2 = new Set([2, 3, 5, 6, 7])

const union = new Set([...set1, ...set2])
console.log(union)

const intersection = new Set([...set1].filter(element => set2.has(element)))
console.log(intersection)

const difference = new Set([...set1].filter(element => !set2.has(element)))
console.log(difference)

// 6. Itera los resultados del ejercicio anterior

union.forEach(element => console.log(element))
intersection.forEach(element => console.log(element))
difference.forEach(element => console.log(element))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

// 8. Dado el mapa anterior, crea un array con los nombres

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario