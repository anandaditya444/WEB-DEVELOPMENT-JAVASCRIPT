const user = require('../../db').user
const route = require('express').Router()

route.get('/',(req,res) => {
    //we want to show the array of users present in our database
    user.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error:"Could not retrieve users"
            })
        })
})

route.post('/',(req,res) => {
    //we here expect that it will contain name in its request
    //hence we add new user here    
    user.create({
        name: req.body.name
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(501).send({
            error:"Could not add user"
        })
    })
})
    
exports = module.exports = route