function download(url){
    return new Promise(function(resolve,reject){
        if(!url.startsWith("http")){
            reject(new Error("url does not start with http"))
        }
        else{       
            console.log("start downloading: " + url)
            setTimeout(function(){
                let filename = url.split("/").pop()
                resolve(filename)
           },3000)
        }
})
}

function resize(filename){
    return new Promise(function(resolve,reject){
        if(!filename.endsWith(".png")){
            reject(new Error("file is not correct"))
        }
        else{
            console.log("starts resizing: " + filename)
            setTimeout(function(){
                let resizedfile = filename.split(".")[0] + "-resized.png"
                resolve(resizedfile)
            },3000)
        }
    })
}

function upload(resizedfilename){
    return new Promise(function(resolve,reject){
        console.log("starts upload " + resizedfilename)
        setTimeout(function(){
            let uploadedurl = "http://ingur.com/" + resizedfilename
            resolve(uploadedurl)
        },3000)
    })
}
// download("http://cb.lk/logo.png")       //THIS IS ALSO CORRECT   
// .then(function(filename){
//     resize(filename).then(function(resizedfile){
//         console.log("resized file is at: " + resizedfile)
//     })

// })

download("http://cb.lk/logo.png")
.then(resize)  //if we want to directly upload the file without resizing the file we can comment out this line.
.then(upload)
.then(function(uploadedurl){
    console.log("file was uploaded to: " + uploadedurl)
})
.catch(function(err){  //SINGLE CATCH FUNCTION THAT CATCHES ALL ERRORS
    console.error(err)
})
