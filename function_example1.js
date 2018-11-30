// function as an argument example

function getfirstname(fullname)
{
    return fullname.split(" ")[0];
}

function greeter(findname,fullname)
{
    let fname = findname(fullname);
    console.log("Hello " + fname)
}
//we can pass function as an object hence no need to call function.
greeter(getfirstname,"Aditya Anand thakur");