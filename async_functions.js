function task(done){
    console.log("doing some task")
    done();
}

task(function(){         //the function defined here is done function itself.
    console.log("task is done")
});

console.log("we did a task")