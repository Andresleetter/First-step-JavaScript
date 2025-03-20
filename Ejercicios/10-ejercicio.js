// 10. Comprobar si el primer carácter de un string es una letra mayúscula

let texto = "JavaScript"
let primeraLetra = texto.charAt(0)

if (primeraLetra >= "A" && primeraLetra <= "Z") {
  console.log("El primer carácter es una letra mayúscula.")
} else {
  console.log("El primer carácter NO es una letra mayúscula.")
}