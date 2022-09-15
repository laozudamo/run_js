function Person (name, age) {
  this.name = name
  this.age = age
}


const person = new Person('John', 33)

function sayHi () {
  console.log('Hello ' + this.name + '!');
}

Person.prototype.sayHi = sayHi

person.sayHi()

// console.log(person);

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   sayHi() {
//     console.log('Hello ' + this.name + '!' );
//   }
// }

// const person = new Person('John', 33)

// person.sayHi()

// console.log(person);
