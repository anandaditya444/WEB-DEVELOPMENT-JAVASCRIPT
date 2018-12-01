// const express = require('express')
// const Router = express.Router
// const route = Router()

//We can write all above as 

const route = require('express').Router()

let students = [
    {name:'Arun', college:'DTU', year:'I'},
    {name:'Neha', college:'NIST', year:'II'},
    {name:'Kelly', college:'JMI', year:'III'},
    {name:'Divine', college:'NIIT', year:'IV'},
    
]

route.get('/',(req,res) => res.send(students))
route.get('/:id',(req,res) => res.send(students[req.params.id]))

module.exports = route