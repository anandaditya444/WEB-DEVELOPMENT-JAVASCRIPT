function task(done)
{
    console.log("we are doing a task")
    setTimeout(done,1000)
}

task(function(){
    console.log("task was done")
})
setTimeout(print,2000)
function print(){
    console.log("we did a task")
 }