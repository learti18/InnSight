import {db} from "../db.js"
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    const q = "SELECT * from users where email = ? or name = ?";
    const { name, lastname, date, email, password } = req.body;

    db.query(q, [email, name], (err, data) => {
        if (err) {
            console.error("Error checking existing user:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (data.length > 0) {
            return res.status(409).json({ error: "User already exists" });
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const insertQuery = "INSERT INTO users (name, lastname, date, email, password) VALUES (?, ?, ?, ?, ?)";
        const values = [name, lastname, date, email, hash];

        db.query(insertQuery, values, (err, data) => {
            if (err) {
                console.error("Error creating user:", err);
                return res.status(500).json({ error: "Failed to create user" });
            }
            return res.status(200).json({ message: "User has been created" });
        });
    });
};


export const login = (req, res) => {
  //CHECK USER

  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};




export const logout = (req, res) => {

    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
      }).status(200).json("User has been logged out.")
    };