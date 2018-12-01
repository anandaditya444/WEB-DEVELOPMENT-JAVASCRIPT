const route = require('express').Router()

let todos = [
    {task:'first'},
    {task:'second'},
    {task:'third'}

]

route.get('/',function(req,res){
    res.render('todos',{todos})
})
route.post('/',function(req,res){
    todos.push({
        task:req.body.newtodo
    })
    res.redirect('/todos')             //redirect to the same previous path,redirect are always GET request
})

module.exports = route