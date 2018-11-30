function add(initval , delta)
{
    let value=initval;
    function counter()
    {
        value += delta;
        return value;
    }
    return counter;
}

let count = add(5,5);

console.log(count());
console.log(count());
console.log(count());
