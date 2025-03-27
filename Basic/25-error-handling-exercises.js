// 1. Captura una excepción utilizando try-catch

function division (a, b) {
  if (b === 0) {
    throw new Error ('No se puede dividir entre cero')
  }
  return a / b
}

try {
  console.log(division(10, 0))
} catch (error) {
  console.log('Se ha producido un error:', error.message)
}

// 2. Captura una excepción utilizando try-catch y finally

try {
  console.log(division(10, 0))
} catch (error) {
  console.log('Se ha producido un error:', error.message)
} finally {
  console.log('Ingrese un denominador valido')
}

// 3. Lanza una excepción genérica

let myObjet

try {
  console.log(myObjet.email)
} catch (error) {
  console.log('Se ha producido un error:', error.message)
}

// 4. Crea una excepción personalizada

class SumError extends Error {
  constructor (message, a, b) {
    super (message)
    this.a = a
    this.b = b
  }
  numeros () {
    console.log(this.a, '+' , this.b)
  }
}

// 5. Lanza una excepción personalizada

try {
  throw new SumError ('Error en suma', '5' + 10)
} catch (error) {
  console.log('Se ha producido un error personalizado:', error.message)
  error.numeros ()
}

// 6. Lanza varias excepciones según una lógica definida

function validarValor(valor) {
  if (typeof valor !== 'number') {
    throw new Error('El valor debe ser un número')
  }
  if (valor < 0) {
    throw new RangeError('El valor no puede ser negativo')
  }
  if (valor === 0) {
    throw new SyntaxError('El valor no puede ser cero')
  }
}

try {
  validarValor(0)
} catch (error) {
  console.log('Se ha producido un error:', error.message)
}

// 7. Captura varias excepciones en un mismo try-catch

try {
  validarValor('texto') // Lanza Error
  validarValor(-5)      // Lanza RangeError
} catch (error) {
  if (error instanceof RangeError) {
    console.log('Error de rango:', error.message)
  } else if (error instanceof SyntaxError) {
    console.log('Error de sintaxis:', error.message)
  } else {
    console.log('Error general:', error.message)
  }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const valores = ['10.5', 'NaN', 'texto', 42]

for (const valor of valores) {
  try {
    const resultado = parseFloat(valor)
    if (isNaN(resultado)) {
      throw new Error(`No se puede convertir el valor: ${valor}`)
    }
    console.log(`Valor convertido: ${resultado}`)
  } catch (error) {
    console.log('Error:', error.message)
  }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class PropiedadError extends Error {
  constructor(propiedad) {
    super(`La propiedad "${propiedad}" no existe en el objeto`)
    this.propiedad = propiedad
  }
}

function verificarPropiedad(objeto, propiedad) {
  if (!objeto.hasOwnProperty(propiedad)) {
    throw new PropiedadError(propiedad)
  }
  console.log(`La propiedad "${propiedad}" existe en el objeto.`)
}

try {
  const objeto = { nombre: 'Andrés' }
  verificarPropiedad(objeto, 'edad')
} catch (error) {
  console.log('Se ha producido un error:', error.message)
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function reintentar(funcion, maxIntentos) {
  let intentos = 0
  while (intentos < maxIntentos) {
    try {
      funcion()
      console.log('Función ejecutada correctamente.')
      break // Sale del bucle si la ejecución es exitosa
    } catch (error) {
      intentos++
      console.log(`Error en intento ${intentos}:`, error.message)
      if (intentos === maxIntentos) {
        console.log('Se alcanzó el número máximo de intentos.')
      }
    }
  }
}

// Ejemplo de uso
let contador = 0
reintentar(() => {
  contador++
  if (contador < 5) {
    throw new Error('Intento fallido')
  }
}, 10)