// 10. Comprobar si el primer carácter de un string es una letra mayúscula

let texto = "JavaScript"
let primeraLetra = texto.charAt(0)

if (primeraLetra >= "A" && primeraLetra <= "Z") {
  console.log("El primer carácter es una letra mayúscula.")
} else {
  console.log("El primer carácter NO es una letra mayúscula.")
}

export function letter (text) {
  const firstLetter = text.charAt(0)

  if (firstLetter >= 'A' && firstLetter <= 'Z') {
    return 'The first letter is capitalized'
  } else {
    return 'The first letter is not capitalized'
  }
}

export const text = 'JavaScript'

console.log(letter(text))

export class LetterClass {
  constructor (text) {
    this.text = text
  }
  letterFunc () {
    return this.text.length
  }
}

const letterObj = new LetterClass(text)
console.log(letterObj.letterFunc())