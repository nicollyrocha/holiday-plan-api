import 'express-async-errors';
import express from 'express';
import cors from 'cors';
const bodyparser = require('body-parser');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const holidaysRouter = require('./routes/index');

app.use(holidaysRouter);
app.use(bodyparser.urlencoded({ extended: false }));

export default app;
