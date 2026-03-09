class Animal {
  constructor() {
    if (this.constructor === Animal) {
      throw new Error("no instant create possible");
    }
  }

  makeSound() {}
}

class Rabit extends Animal {
  makeSound() {
    console.log("rabit");
  }
}
rabit = new Rabit();
rabit.makeSound();
