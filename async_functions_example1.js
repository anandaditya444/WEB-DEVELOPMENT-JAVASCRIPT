function task()
{
    console.log("task was done")
}

setTimeout(task , 1000)  //we didnt call task function as setTimeout automatically calls the function after the given time delay 
//and this delay is asynchronus in nature
console.log("We did a task")