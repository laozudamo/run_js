/* 
  对象的扁平化
*/

const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 }
  },
  b: [ { a: 2, b: 3 }],
  c: 3
}

const isObj = (val) => typeof (val) === "object" && val !== null
const res = {}
function flatObj(obj) {
  if (!isObj(obj)) return
  for (let [key, value] of Object.entries(obj)) {
    if (!isObj(value)) {
      res[key] = value
      console.log(res)
    } else {
      flatObj(value)
    }
  }
}
flatObj(obj)
