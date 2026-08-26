class Animal {
  #a = 90;
  b = 10;
  c = 20;

  eat() {
    console.log("Eating...");
  }

  sleep() {
    console.log("Sleeping..."+this.#a);
  }
}
class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}

const dog = new Dog();

dog.eat();
dog.sleep();
dog.bark();