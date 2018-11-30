let a = false;

setTimeout(function(){
    a = true;
},1)

while(!a)
{
    console.log(1)
}

