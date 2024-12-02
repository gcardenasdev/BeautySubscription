const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config({
    path: '../.env'
});

const app = express()


app.use(express.static('dist'))
app.use(cors())
app.use(express.json())

const port = 5000



  app.options('/confirmation', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
  });


const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})


app.post('/order', (req, res) => {
    const sql = "INSERT INTO orders (email, password, country, state, zipcode, sub_type, total) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const saltRounds = 10;

    bcrypt.hash(req.body.password, saltRounds, (err, hashedPassword) => {
        if (err) {
            return res.json({ message: 'Error hashing password: ' + err });
        }

        const values = [
            req.body.email,
            hashedPassword,
            req.body.country,
            req.body.state,
            req.body.zipcode,
            req.body.sub_type,
            req.body.total
        ];

        db.query(sql, values, (err, result) => {
            if (err) {
                return res.json({ message: 'Something unexpected has occurred: ' + err });
            }
            console.log(result);
            return res.json({ success: "User added successfully", id: result.insertId });
        });
    });
});

app.get('/confirmation', (req, res)=>{
    const order_num = parseInt(req.query.order_num);
    const sql = "SELECT * FROM orders WHERE `order_num`= ?";
    
    console.log("This is order number: "+order_num);

    db.query(sql, [order_num], (err, result) => {
      if (err) res.json({ message: "Server error" });
      return res.json(result);
    });
  });



app.listen(port, () => {
    console.log('listening on port: ' + port)
})