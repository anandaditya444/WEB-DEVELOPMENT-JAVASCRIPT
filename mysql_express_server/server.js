const express = require('express')
const app = express()
const db = require('./db')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')
//app.set('views',__dirname + '/views')

app.get('/',(req,res) => {

    db.getallpersons()
        .then((persons) => {
            res.render('persons',{persons})
         })
        .catch((err) => {
            res.send(err)
        })
   
})

app.get('/add',(req,res) => {
    res.render('persons_add')
})

app.post('/add',(req,res) => {

    db.addnewperson(req.body.name,req.body.age,req.body.city)
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            res.send(err)
        })

})

app.listen(4000,() => {
    console.log("server started at localhost:4000")
})