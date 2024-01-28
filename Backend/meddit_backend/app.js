import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from "url";
import exp from "constants";
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

function opendb() {
    let db = new sqlite3.Database('posts.db', sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE, (err) => {
        if (err) { return console.error(err.message); }
        console.log('Connected to the in-memory SQlite database.');
    });
    return db;
}

function closedb(db) {
     db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
}


db.run( `CREATE TABLE IF NOT EXISTS Posts (
        postID int primary key not null, 
        title text not null,
        user text not null,
        date text not null,
        likes int not null,
        content text not null
    )`
);

function postLogger(req, res, next) {
    next();
}
app.use(postLogger);

app.get('/', (req, res) => {
    res.send(path.join(__dirname, '../../Frontend/meddit_frontend/src', 'index.js'));
});


app.post("/login", (req, res) => { 
    let email = req['email'];
    console.log(email);
    // const emailArray = email.split("@");
    // let user = emailArray[0];
    // let domain = emailArray[1];

    // var sql = 'INSERT INTO Posts(PostID, title, user, date, likes, content) VALUES (?, ?, ?, ?, ?, ?)';
    // db.run(sql, [3, 'TEST_POST', user, '10/17/2023', 100, "This is a test post show to how cool we are"], err => {
    //     if(err) {
    //         return console.log(err.message);
    //     }
    // });

    let db = opendb();

    let sql = 'SELECT * FROM Posts WHERE PostID >= 1'; 
    let feed = [];
    db.serialize((callback) => {
        db.each(sql, (err, row) => {
            if(err) {
                console.log(err.message);
            }
            feed.push(row);
        }, function() {
            console.log(feed);
            res.setHeader('Content-Type', 'application/json');
            res.send(feed);
        });
    });

    closedb(db);


});





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

