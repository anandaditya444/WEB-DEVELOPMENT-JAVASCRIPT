const server = require('express')()   //we can write this directly also

const teacherroute = require('./routes/teachers')
const studentroute = require('./routes/students')

server.use('/students',studentroute)
server.use('/teachers',teacherroute)

server.listen(3333)