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

// class Car {
//   #fuel = 100;

//   #burnFuel() {
//     this.#fuel -= 1;
//   }
//   start() {
//     this.#burnFuel();
//     console.log("car is Starting");
//   }
// }

// let buggati = new Car();

// console.log(buggati);
// buggati.start();
// console.log(buggati);

class BankAccount {
  #balance = 100;
  constructor(holderName, balance) {
    this.holderName = holderName;
    this.#balance = balance;
  }

  deposit(balance) {
    this.#balance += balance;
  }
  credit(balance) {
    this.#balance -= balance;
  }

  set Balance(balance) {
    if (isNaN(balance)) {
      console.error("invalid balance to set");
      return;
    }
    this.#balance = balance;
  }
  get Balance() {
    return this.#balance;
  }
}

let rampraveshBnakAccount = new BankAccount("Rampravesh kumar", 5000);

rampraveshBnakAccount.deposit(5000);
console.log(rampraveshBnakAccount.Balance)
console.log(rampraveshBnakAccount);

console.log(rampraveshBnakAccount.deposit)


