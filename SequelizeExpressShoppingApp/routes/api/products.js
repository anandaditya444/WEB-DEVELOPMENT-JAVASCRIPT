const product = require('../../db').product
const route = require('express').Router()

route.get('/',(req,res) => {
//Get all products
    product.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500).send({
                error:"Could not retrieve products"
            })
        })
})

route.post('/',(req,res) => {
//Add a new product
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error:"Price is not a valid number"
        })
    }
    product.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price)   //because in POST request every data goes into strings form
    }).then((product) => {
        res.status(201).send(product)
    }).catch((err) => {
        res.status(501).send({
            error:"Error adding product"
        })
    })
})

exports = module.exports = route