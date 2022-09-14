function Person(name, age) {
  this.name = name;
  this.age = age;
}

function sayHi() {
  console.log("hello world! " + this.name, this.age)
}

Person.prototype.sayHi = sayHi;


const jack = new Person("jack", 18)
