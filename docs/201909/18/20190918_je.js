var a = 10
b = 15
console.log(a) // 10
console.log(b) // 15

console.log(global.a) // undefined
console.log(global.b) // 15

var var1 = 1
var var2 = 2
function func() {
  var var1 = 10
  var var2 = 20 
  console.log(var1) // 10
  console.log(var2) // 20
}
func()
console.log(var1) // 1
console.log(var2) // 2

function countSeconds(howMany) {
  for (var i = 1; i < howMany; i++) {
    (function(current) {
    setTimeout(function() {
      console.log(current)
      }, current * 1000)
    }(i))
  }
}

countSeconds(3)