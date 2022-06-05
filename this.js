/* 
  改变this的指向
  call
  apply
  bind
*/

// call apply 调用对象都必须是函数
// function foo() {
//   console.log(this.name, this.price);
// }

// const obj = {
//   name: 'jack',
//   price: 6666,
//   age: 18,
//   sayHi() {
//     console.log('hello, my name is ' + this.name)
//   }
// }

// const phone = {
//   name: 'iphone',
//   price: 6666
// }

// foo.call(obj);
// foo.apply(obj)


// bind是返回一个函数，而不是执行结果

// let fun =  foo.bind(phone)
// fun()

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  // call 和 this的区别
  // Product.call(this, name, price);
  Product.apply(this, [name, price]);
  this.category = 'food';
}

const food = new Food('apple', 5);
console.log(food)