// 1. Crea una clase que reciba dos propiedades

class Car {
  constructor (brand, color) {
    this.brand = brand
    this.color = color
  }
}

// 2. Añade un método a la clase que utilice las propiedades

class CarMethod {
  constructor (brand, color) {
    this.brand = brand
    this.color = color
  }
  starts () {
    console.log('Ther car starts')
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función

let car = new CarMethod ('Toyota', 'Black')
console.log(car.brand)
console.log(car.color)
car.starts ()

// 4. Añade un método estático a la primera clase

class CarStatic {
  constructor (brand, color) {
    this.brand = brand
    this.color = color
  }
  static stop ( warning ) {
    return warning
  }
}

// 5. Haz uso del método estático

console.log(CarStatic.stop('The car stoped'))

// 6. Crea una clase que haga uso de herencia

class SmallCar extends Car {
  constructor (brand, color, model) {
    super (brand, color)
    this.model = model
  }
  turnsOn () {
    console.log('The car turns on')
  }
  starts () {
    console.log('The car moves')
  }
}

let smallCar = new SmallCar('Toyota', 'Red', 'Corolla');
console.log(smallCar.brand)
console.log(smallCar.color)
console.log(smallCar.model)
smallCar.turnsOn()
smallCar.starts()

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 