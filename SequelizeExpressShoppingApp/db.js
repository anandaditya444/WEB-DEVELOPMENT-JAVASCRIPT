const sequelize = require('sequelize')

const db = new sequelize('shopdb','shopper','shoppass',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5
    }
})

//we are creating a clss user which contains columns as objects
const user = db.define('users',{
    id:{
    type:sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
},
    name:{  
        type:sequelize.STRING,
        allowNull:false
    }
})

const product = db.define('products',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    },
    manufacturer:sequelize.STRING,
    price:{
        type:sequelize.FLOAT,
        allowNull:false,
        defaultValue:0.0
    }
})

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.log("Error creating database"))

exports = module.exports = {
    user,product
}