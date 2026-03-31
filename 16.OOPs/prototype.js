// function Student(name, age) {
//   this.name = name;
//   this.age = age;
//   this.introduceMySelf = function () {
//     console.log(`my name is ${this.name},my age is ${this.age}`);
//   };
// }

// let s1 = new Student("rampravesh", 20);
// let s2 = new Student("ritika", 2);

// s1.introduceMySelf();
// s2.introduceMySelf();

// we can add method to the prototype of the constructor function

// Student.prototype.introduceMySelf = function () {
//     console.log(`my name is ${this.name},my age is ${this.age}`);
// };

// console.log(s1);
// console.log(s2);

// s1.introduceMySelf();
// s2.introduceMySelf();

// function BankAccount(holderName, balance) {
//   this.holderName = holderName;
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// BankAccount.prototype.getBalance = function () {
//   return this.balance;
// };

// let account1 = new BankAccount("Rampravesh", 1000);
// let account2 = new BankAccount("Abhilasha", 2000);

// account1.deposit(500);
// account2.withdraw(200);

// console.log(account1);
// console.log(account2);

// console.log(account1.getBalance());
// console.log(account2.getBalance());

class BankAccount {
  constructor(holderName, balance) {
    this.holderName = holderName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}

let account1 = new BankAccount("Rampravesh", 1000);
let account2 = new BankAccount("Abhilasha", 2000);

account1.deposit(500);
account2.withdraw(200);

console.log(account1);
console.log(account2);

console.log(account1.getBalance());
console.log(account2.getBalance());