import mysql from "mysql2"

export const db = mysql.createConnection({
    host:"localhost",
    user:"innsight",
    password:"leart123",
    database:"innsight"

})