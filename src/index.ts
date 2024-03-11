import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { router } from './api';
const bodyparser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});
app.use(express.static('public'));
app.use(express.json());
app.use(router);
app.use(bodyparser.urlencoded({ extended: false }));

module.exports = app;
