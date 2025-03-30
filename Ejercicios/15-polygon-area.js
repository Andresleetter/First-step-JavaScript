/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

import { createInterface } from 'readline'

class Poligono {
  constructor ( { tipo, lado, ancho, altura, base } ) {
    this.lado = lado
    this.ancho = ancho
    this.altura = altura
    this.base =  base
    this.tipo =  tipo // triangulo, cuadrado, rectangulo
  }
  calcularArea () {
    switch ( this.tipo.toLowerCase() ) {
      case 't': // triangulo
        return ( this.base * this.altura ) / 2
      case 'c': // cuadrado
        return this.lado ** 2
      case 'r': // rectangulo
        return this.base * this.altura
      default:
        throw new Error ( 'Tipo de poligono no permitido' )
    }
  }
  elegirtipo () {
    const rl = createInterface ({
      input: process.stdin,
      output: process.stdout
    })

    const askType = ( question, callback ) => {
      rl.question( question, ( input ) => {
        const type = input.toLowerCase()

        if (!['t', 'c', 'r'].includes( type )) {
          console.log("Por favor, ingresa un tipo valido ( 't', 'c', 'r' )")
          askType( question, callback )
        } else {
          callback( type )
        }
      })
    }

      const askDimensions = ( question, callback ) => {
        rl.question( question, ( input ) => {
          const value = parseFloat( input )

          if ( isNaN( value ) ) {
            console.log('Por favor, ingresa un numero valido')
            askDimensions( question, callback)
          } else {
            callback( value )
          }
        })
      }

      askType("Elige un poligono: 't'riangulo, 'c'uadrado, 'r'ectangulo: ", ( tipo ) => {
        this.tipo = tipo.toLowerCase()

      switch ( this.tipo ) {
        case 't':
          askDimensions('Ingresa la base: ', ( base ) => {
            this.base = base
            askDimensions('Ingrese la altura: ', ( altura ) => {
              this.altura = altura
              console.log(`Area del triangulo: ${this.calcularArea()}`)
              rl.close()
            })
          })
          break
          case 'c':
          askDimensions('Ingresa el lado: ', ( lado ) => {
            this.lado = lado
            console.log(`Area del cuadrado: ${this.calcularArea()}`)
            rl.close()
          })
          break
          case 'r':
          askDimensions('Ingresa la base: ', ( base ) => {
            this.base = base
            askDimensions('Ingrese la altura: ', ( altura ) => {
              this.altura = altura
              console.log(`Area del rectangulo: ${this.calcularArea()}`)
              rl.close()
            })
          })
          break
        default:
          console.log('Tipo de polígono no permitido')
          rl.close()
          break
      }
    })
  }
}

const poligono = new Poligono({}) 
poligono.elegirtipo()