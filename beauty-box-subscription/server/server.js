const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(express.json())

const port = 3000

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "beauty_box"
})

app.post('/add_user', (req, res) => {
    sql = "INSERT INTO users (`email`, `password`, `country`, `state`, `zipcode`) VALUES (?, ?, ?, ?, ?)";

    const values = [
        req.body.email,
        req.body.password,
        req.body.country,
        req.body.state,
        req.body.zipcode
    ]

    db.query(sql, values, (err, result)=>{
        if(err) return res.json({message: 'Something unexpected has occured' + err})
            return res.json({success: "User added successfully"})
    })
})


app.listen(port, () => {
    console.log('listening')
})