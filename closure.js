function createcounter(initval,delta)
{
    let val=initval;
   let obj = {
       incr: function (){
           val+=delta;
       },
       decr:function (){
           val-=delta;
       },
       show:function(){
           console.log(val)
       }

    }
    return obj;
}

let a=createcounter(10,5);
a.show()
a.incr()
a.show()
console.log(typeof a.show)
console.log(typeof a.show())  //does not return anything
console.log(typeof a)

