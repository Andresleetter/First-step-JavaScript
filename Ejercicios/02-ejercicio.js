// 2. Determinar si una palabra comienza con la letra "A" (mayúscula o minúscula)

let palabra = "Amigo"
let primeraLetra = palabra.charAt(0)

if (primeraLetra === 'A' || primeraLetra === 'a') {
  console.log(`La primera letra comienza con: ${primeraLetra}`)
} else {
  console.log("La primera letra no comienza con 'A' o 'a'")
}