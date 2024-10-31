const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(express.json())

const corsOptions ={
    origin: '*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

const port = 5000

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "beauty_box"
})


app.post('/order', (req, res) => {
    const sql = "INSERT INTO orders (email, password, country, state, zipcode, sub_type, total) VALUES (?, ?, ?, ?, ?, ?, ?)";


    const values = [
        req.body.email,
        req.body.password,
        req.body.country,
        req.body.state,
        req.body.zipcode,
        req.body.sub_type,
        req.body.total
        

    ]


    db.query(sql, values, (err, result)=>{
        if(err) return res.json({message: 'Something unexpected has occured' + err})
            console.log(result)
            return res.json({success: "User added successfully", id: result.insertId})
    })


})

app.get('/confirmation', (req, res)=>{
    const order_num = parseInt(req.query.order_num);
    const sql = "SELECT * FROM orders WHERE `order_num`= ?";
    db.query(sql, [order_num], (err, result) => {
      if (err) res.json({ message: "Server error" });
      return res.json(result);
    });
  });


app.listen(port, () => {
    console.log('listening')
})