/* 
  Object.is(a, b) 判断的是地址是否相同
*/

const a = { name: '林三心' }
const c = { name: '林三心' }
const b = a

console.log(Object.is(a, b))


/* 
  Object.assign()
*/

const testa = {
  name: 'jack'
}

const testb = {
  dany: 'dany',
  age: {
    dan: {
      sex: '男'
    }
  }
}

// 相同属性将会被 cover
const testc = Object.assign({}, testa, testb)
console.log(testc)

/* 
  只会进行第一层级的判断
*/
let v = testc.hasOwnProperty('dan')
console.log(v)

