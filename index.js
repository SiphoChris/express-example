import express from "express";
import path from "node:path";
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { config } from "dotenv";
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const port = +process.env.PORT || 4000;

app.use(express.static('./static'))

app.get("/", (_req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "./static/index.html"));
});
app.get("/about", (_req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "./static/about.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
