const express = require('express')
const server = express()

const todosroute = require('./todosapi')


server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use('/todos',todosroute)

server.listen(3000)