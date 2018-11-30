function downloadfile(url, downloaded){
    console.log("Downloading file: " + url)

    setTimeout(function(){
        let filepath = "C:\\Downloads\\" + url.split('/').pop()
        console.log("File was downloaded to: " + filepath)
        downloaded(filepath)
    },3000)
}

function resizefile(filepath, resized){
    console.log("we are resizing : " + filepath)
    setTimeout(function(){
        let newpath = filepath.split(".")[0] + "-resized." + filepath.split(".")[1]
        resized(newpath)
    },3000)
}
 function uploadfile(diskpath,uploaded){
     setTimeout(function(){
         let uploadedpath = "http://cb.lk/uploads/" + diskpath.split('\\').pop()
         console.log("we uploaded to " +  uploadedpath)
         uploaded(uploadedpath)
     },3000)
 }

 downloadfile("http://google.com/logo.png",function(downloadedpath){
     resizefile(downloadedpath,function(resizedpath){
         uploadfile(resizedpath,function(uploadedurl){
             console.log("uploaded successfully to: " + uploadedurl)
         })
     })
 })