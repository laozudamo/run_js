// let proxy = new Proxy(target, handler)


let numbers = [];

numbers = new Proxy(numbers, { // (*)
  set(target, prop, val) { // 拦截写入属性操作
    // console.log(target ,prop, val)
    target[prop] = val
    console.log(Array.isArray(target))
    return true
   
  }
});

let v = Array.isArray(numbers)

numbers.push(1); // 添加成功
numbers.push(2); // 添加成功
console.log(numbers);
