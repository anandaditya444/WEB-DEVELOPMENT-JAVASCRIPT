const express = require('express')

const server = express()

server.get('/',function(req,res,next){
    console.log("YO")
    res.send("Hello World")
})

server.get('/greet/:tod',function(req,res,next){            //here :tod means a variable
    let tod = 'Morning'
    switch(req.params.tod){                                 //which is accessed by writing req.params.name
        case 'morning':tod = 'Morning'; break;
        case 'evening':tod = 'Evening'; break;
    }
    let greeting = "Good " + tod + ", " + req.query.name   //by using req.query.name we can get data written after ?name=...
    res.send(greeting)
})
server.get('/html',function(req,res,next){
    res.send(`
    <html>
    <body>
        <h1>This is a HTML page</h1>
        <i>This looks really awesome</i>
    </body>
    </html>
    `)
})

server.listen(2121)