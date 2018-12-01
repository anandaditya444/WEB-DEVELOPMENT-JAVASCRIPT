const express = require('express')
const server = express()
const todoroute = require('./todos/todos')

server.get('/hello',(req,res) => {
    res.send('hello world')
})

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use('/public',express.static(__dirname + '/public'))

server.use('/todos',todoroute)


server.listen(4567)