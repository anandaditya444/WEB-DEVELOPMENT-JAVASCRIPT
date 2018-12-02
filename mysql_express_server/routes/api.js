const route = require('express').Router()
//This route is on the /api/ path
const db = require('../db')

route.get('/persons/',(req,res) => {
    //send all persons as an array here 
    //we here create an artificial delay
        db.getallpersons()
        .then((persons) => res.send(persons))
        .catch((err) => res.send({error:err}))
    })

route.post('/persons/',(req,res) => {
    //Add the new person(details are in the body)
    db.addnewperson(req.body.name,req.body.age,req.body.city)
        .then(() => res.send('/api/persons/'))   //redirect to get all persons data
        .catch((err) => res.send({error:err}))
})

exports = module.exports = {
    route
}