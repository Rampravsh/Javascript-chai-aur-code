// class Car {
//   constructor(name, color, mileage) {
//     this.name = name;
//     this.color = color;
//     this.mileage = mileage;
//   }

//   start() {
//     console.log(`${this.name} is starting...`);
//   }
//   stop() {
//     console.log(`${this.name} is stoping...`);
//   }
// }

// let Bmw = new Car("BMW", "dark", 45);
// let toyota = new Car("Toyota", "Silver Blue", 45);
// let buggati = new Car("Buggati", "Brown", 45);

// console.log(Bmw,toyota,buggati)

class Car {
  #fuel = 100;

  #burnFuel() {
    this.#fuel -= 1;
  }
  start() {
    this.#burnFuel();
    console.log("car is Starting");
  }
}

let buggati = new Car();

console.log(buggati);
buggati.start();
console.log(buggati);
