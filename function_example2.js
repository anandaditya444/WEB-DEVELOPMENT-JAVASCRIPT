//Example of function returning a function

function creategreeter(name)
{
    let fname = name.split(" ")[0];
    function greeter()
    {
        console.log("hello " + fname)
    }
    return greeter;
}

let adityagreeter = creategreeter("Aditya Anand");
let premagreeter = creategreeter("Prema Devi");

adityagreeter();
premagreeter(); 

let a = function () { console.log("yo")};

a();

let b = a;
console.log(b)