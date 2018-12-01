const express = require('express')
const server = express()   //we can write this directly also

const teacherroute = require('./routes/teachers')
const studentroute = require('./routes/students')

server.use(express.json())  //it transforms the json data into javascript object,json is a middleware    
server.use(express.urlencoded({extended:true}))   //another middleware it decodes the body if it is in urlencoded form

server.use('/students',studentroute)
server.use('/teachers',teacherroute)

server.listen(3333)