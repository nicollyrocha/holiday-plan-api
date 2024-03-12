import 'express-async-errors';
import express from 'express';
import cors from 'cors';
const bodyparser = require('body-parser');
import api from './api';
import { Router } from 'express';
const db = require('./config/database');

const router = Router();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use(express.json());
app.use(api);
app.use(bodyparser.urlencoded({ extended: false }));

export default app;
