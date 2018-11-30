let o = {
  a:10
}
let p = Object.create(o)
p.b = 20

let x = Object.create(p)
x.c = 30

console.log(o)
console.log(p)
console.log(x)
console.log(x.a)
console.log(x.b)
console.log(p.a)
console.log(x.__proto__.__proto__ == o)
console.log(x.__proto__ == p)
