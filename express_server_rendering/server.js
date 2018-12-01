const express = require('express')
const server = express()

const todoroute = require('./routes/todos')

server.set('view engine','hbs')  //this means that we will use hbs as the rendering engine
server.set('views',__dirname + '/views')  //for lookup file in correct directory
server.use(express.json())
server.use(express.urlencoded({extended:true}))

//server.set('views','./views')
server.use('/todos' ,todoroute)

server.listen(3456)