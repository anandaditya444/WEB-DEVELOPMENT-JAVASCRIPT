// const express = require('express')
// const Router = express.Router
// const route = Router()

//We can write all above as 

const route = require('express').Router()

let teachers = [
    {name:'Arnav', sub:'Web dev'},
    {name:'Aditya', sub:'Competitve Coding'}
]

route.get('/',(req,res) => res.send(teachers))
route.get('/add',(req,res) => {
    teachers.push({
        name:req.query.name,
        sub:req.query.sub
    })
    res.send(teachers)
})
route.get('/:id',(req,res) => res.send(teachers[req.params.id]))

module.exports = route