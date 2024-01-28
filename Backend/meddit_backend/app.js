import express from "express";
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    console.log(req.url);
    res.send(path.join(__dirname, '../../Frontend/meddit_frontend/src', 'index.js'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});