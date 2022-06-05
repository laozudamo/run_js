/* 
实现原生的AJAX请求
*/

const ajax = {
  get(url, fn) {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        fn(xhr.responeText)
      }
    }
    xhr.send()
  },
  post(url, data, fn) {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setxhrHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        fn(xhr.responeText)
      }
    }
    xhr.send(data)
  }
}