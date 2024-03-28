import express from "express"
import mysql from "mysql"


const app = express()
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"test"
})

app.listen(8800,() => {
    console.log("connected to backend")
})