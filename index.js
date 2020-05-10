const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config();

const port = 5000

// middleware
app.use('/posts', () => {console.log('THis is middleware running')})

// database
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

conn.connect((err) => {
    if (err) throw err;
    console.log('DB Connection success')
});


conn.query("show databases", (err, result, fields) => {
    console.log(err);
    console.log(result);
    // console.log(`fields ${fields}`);
})

app.get('/', (req, res) => {
    res.send("<h1>Hello worasdld</h1>");
});


app.get('/posts', (req, res) => {
    res.send("Hello postssssss");
});


app.listen(port);