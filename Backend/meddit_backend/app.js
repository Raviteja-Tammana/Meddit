import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

/* CREATE DATABASE */
let db = new sqlite3.Database('posts.db', sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE, (err) => {
    if (err) { return console.error(err.message); }
    console.log('Connected to the in-memory SQlite database.');
});

db.run( `CREATE TABLE Posts (
        postID int primary key not null, 
        title text not null,
        user text not null,
        date text not null,
        likes int not null,
        context text not null
    )`
);

function postLogger(req, res, next) {
    console.log(req.body);
    next();
}
app.use(postLogger);

app.get('/', (req, res) => {
    res.send(path.join(__dirname, '../../Frontend/meddit_frontend/src', 'index.js'));
});

// send email to frontend
app.post("/login", (req, res) => { 
    // sendStatus invalid if not authenticated
    let email = req.body["email"];
    console.log(email);
    const emailArray = email.split("@");
    let user = emailArray[0];
    let domain = emailArray[1];
    res.send(req.body); 
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });