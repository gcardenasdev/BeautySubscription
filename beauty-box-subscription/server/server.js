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


app.listen(port, () => {
    console.log('listening')
})