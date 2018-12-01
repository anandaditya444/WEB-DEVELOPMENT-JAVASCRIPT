function downloadpromise(){
    return new Promise(function(resolve,reject){
        console.log("Starting to download")
        setTimeout(function(){
            console.log("End of download")
            resolve()
        },3000)
    })
}

// downloadpromise().then(function(){
//     console.log("After download")
// })

let downloadedpromise = downloadpromise()

setTimeout(function(){
    downloadedpromise.then(function(){
        console.log("After download")
    }) 
},6000)