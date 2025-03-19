// 5. Concatenar dos strings solo si ambos tienen más de 3 caracteres

let string1 = "Hola"
let string2 = "Mundo"

if (string1.length > 3 && string2.length > 3) {
  console.log(string1 + ", " + string2)
} else {
  console.log('Uno de los strings no cuenta con mas de 3 caracteres')
}