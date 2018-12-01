const express = require('express')
const server = express()

server.get('/a',(req,res) => {     //we can also write like this if we don't use next function by using an arrow
    res.send('AAAAAA')
}) 

server.get('/b',(req,res) => {
    res.send('BBBBB')
})

server.use((req,res) => {               //404 middleware created that handles all path as 'server.use' is used
    res.send('<h2>404 not found</h2>')  //this is a global middleware hence it can handle all types of requests
})                                      //like get,post,delete,patch etc. hence server.use needs to be used

server.listen(2543)