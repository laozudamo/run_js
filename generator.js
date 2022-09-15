// generator
/* 
  generator 可以按需一个接一个地返回（“yield”）多个值。
  它们可与 iterable 完美配合使用，从而可以轻松地创建数据流。
*/

/* 
  可迭代的可以用for of 进行遍历
*/
// 创建generator函数


// 可迭代的对象都可可以使用扩展运算符号

function* getSeries () {
  yield 1
  yield 2
  yield 5
  return 3
}

let gen = getSeries() // gen是迭代器

for(let value of gen) {
  console.log(value)
}

let res = getSeries()

let arr = [...res]
console.log(arr);
// let res = getSeries()
// function getAll () {
//   let v = res.next()
//   console.log(v);

//   if(v.done === false) {
//     getAll()
//   }
// }

// getAll()



// console.log(one, two, three)