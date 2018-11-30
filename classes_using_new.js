function person(name,age){
    this.firstname = name.split(" ")[0]
    this.lastname = name.split(" ")[1]
    //this.age = age
    this.isadult = function(){
         return age > 18;
    }
}

let p = new person("John Smith", 29)
let h = new person("Harry Potter", 15)

//console.log(p)
console.log(p.isadult())
console.log(h.isadult())
