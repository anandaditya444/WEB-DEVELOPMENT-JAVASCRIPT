const route = require('express').Router()


let todo = [
    {Task:'Homework',Done:'Yes'},
    {Task:'Chores',Done:'No'}
]

route.get('/',(req,res) => {
    res.send(todo)
})
route.post('/',(req,res) => {
    todo.push({
        Task:req.body.Task,
        Done:req.body.Done
    })
    res.send(todo)
})
route.get('/:id',(req,res) => {
    res.send(todo[req.params.id])
})
route.patch('/:id',(req,res) => {
    res.send(todo)
})
route.delete('/:id',(req,res) => {
    res.send(todo)
})

module.exports = route