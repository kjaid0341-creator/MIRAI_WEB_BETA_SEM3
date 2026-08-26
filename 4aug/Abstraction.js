// class Bankaccount {
//     account_type;
//     #balance = 1000;

//     constructor(account_type, amount) {
//         this.account_type = account_type;
//         this.#balance = amount;
//     }

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     withdraw(amount) {
//         this.#balance -= amount;
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// const vikas = new Bankaccount("saving", 2000);

// vikas.withdraw(500);

// console.log(vikas.getBalance());



class Car {
  start() {
    this.#injectFuel();
    this.#startEngine();

    console.log("Car Started");
  }

  #injectFuel() {
    console.log("Fuel Injected");
  }

  #startEngine() {
    console.log("Engine Started");
  }
}

const bmw = new Car();

bmw.start();