/* 
  数组的扁平化
*/

const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

const isArr = item => Array.isArray(item)

// function isArr(item) {
// return item instanceof Array
// return item.constructor === Array
// }

const res = []
function flatArr (arr) {
  if (!isArr(arr)) return
  arr.forEach(item => {
    if (isArr(item)) {
      flatArr(item)
    } else {
      res.push(item)
    }
  })
}
flatArr(arr)
console.log(res)
