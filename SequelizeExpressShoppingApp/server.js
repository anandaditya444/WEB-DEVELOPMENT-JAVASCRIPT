const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/',express.static(path.join(__dirname, 'public')))
app.use('/api',require('./routes/api').route)


app.listen(5000,() => console.log("Server has started at localhost:5000"))