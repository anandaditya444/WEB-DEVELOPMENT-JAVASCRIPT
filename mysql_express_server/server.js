const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')
//app.set('views',__dirname + '/views')

app.use('/pages',require('./routes/pages').route)
app.use('/api',require('./routes/api').route)
app.use('/',express.static(path.join(__dirname, 'public_static')))


app.listen(4000,() => {
    console.log("server started at localhost:4000")
})