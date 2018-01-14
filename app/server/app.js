import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router';

const app = express();

const assets = express.static(path.join(__dirname, '../'));

// Helper layer (parses the requests, and adds further data).

app.use(cors());
app.use(assets);

app.use(bodyParser.json());
app.get('*', router);

console.log(app);

export default app;
