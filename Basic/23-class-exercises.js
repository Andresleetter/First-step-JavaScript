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
    console.log('The car starts')
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

class GetCar {

  #brand
  #plate

  constructor (brand, color, plate) {
    this.#brand = brand
    this.color = color
    this.#plate = plate
  }
  get brand () {
    return this.#brand
  }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

class GetSetCar {

  #brand
  #plate

  constructor (brand, color, plate) {
    this.#brand = brand
    this.color = color
    this.#plate = plate
  }
  get brand () {
    return this.#brand
  }
  get plate () {
    return this.#plate
  }
  set plate (newPlate) {
    if (typeof newPlate === 'string' && newPlate.length > 0) {
      this.#plate = newPlate;
    } else {
      console.error('Invalid plate value')
    }
  } 
}

// 9. Utiliza los get y set y muestra sus valores

let car1 = new GetSetCar ('Toyota', 'Black', 'BOSS1234')

console.log(car1.plate)
console.log(car1.brand)
car1.plate = 'VESS1234'
console.log(car1.plate)

// 10. Sobrescribe un método de una clase que utilice herencia 

class NewCar {
  constructor (brand, color) {
    this.brand = brand
    this.color = color
  } 
  starts () {
    console.log('The car starts')
  }
}

class ElectricCar extends NewCar {
  constructor(brand, color, battery) {
  super(brand, color)
  this.battery = battery
  } 
  starts () {
    super.starts ()
    console.log('The electric car starts')
  }
  checkBattery() {
    console.log('The battery level is at 100%')
  }  
}

let regularCar = new NewCar('Toyota', 'Black')
regularCar.starts()

let electricCar = new ElectricCar('Tesla', 'White', '100 kWh')
electricCar.starts()

electricCar.checkBattery()