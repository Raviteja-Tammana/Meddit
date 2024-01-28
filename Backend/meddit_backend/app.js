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
let db = new sqlite3.Database('~\\HackatUCI\\posts.db', sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE, (err) => {
    if (err) { return console.error(err.message); }
    console.log('Connected to the in-memory SQlite database.');
});

function postLogger(req, res, next) {
    console.log(req.body);
    next();
}
app.use(postLogger);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Frontend/meddit_frontend/public', 'index.html'));
});

// send email to frontend
app.post("/login", (req, res) => { 
    // sendStatus invalid if not authenticated
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