let a = false;

setTimeout(function(){
    a = true;
},0)

while(!a)
{
    console.log(1)
}

