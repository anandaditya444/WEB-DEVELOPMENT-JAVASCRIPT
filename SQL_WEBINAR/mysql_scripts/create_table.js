const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'mypass'
})

connection.query(
    `CREATE TABLE IF NOT EXISTS persons (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        age INTEGER NOT NULL,
        city VARCHAR(30)
    )`,function(err,results){
        if(err){
            console.error(err)
        }
        else{
            console.log("Table created successfully")
        }
        connection.close()           //always close the connection to prevent memory leak

    }
)