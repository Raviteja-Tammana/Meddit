import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8080;
var post = "";

// app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

function postLogger(req, res, next) {
    console.log(req.body);
    post = req.body.email + req.body["pet"]; // need to get a field from HTML
    next();
}
app.use(postLogger);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Frontend/meddit_frontend/public', 'index.html'));
});

app.post("/login", (req, res) => {
    console.log(req);
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});