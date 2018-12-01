function someasynctask(callback){
    setTimeout(callback,3000)
}

someasynctask(function(){
    console.log("we did some task")
})