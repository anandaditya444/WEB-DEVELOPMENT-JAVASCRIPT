function fun(){
  //  console.log(this == global)
    this.p = "something"
    return 10;
}

let o1 = fun();
let o2 = new fun(); //the entire function box is the return when we call with new keyword.

console.log(o1)
console.log(o1.p)
console.log(o2)
console.log(o2.p)

