const fs = require('fs')

fs.writeFile(__dirname + '/myfile.txt',"some data",function(err){  //dirname is used to create the file 
    if(err){                                                       // in the current folder 
        throw err
    }
    console.log("File is written successfully")
})