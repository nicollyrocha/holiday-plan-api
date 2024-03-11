import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { router } from './server/routes';
const bodyparser = require('body-parser');

const app = express();
app.get('/', (req, res) => {
	res.send('Express on Vercel');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
app.use(cors());

app.use(express.json());
app.use(router);
app.use(bodyparser.urlencoded({ extended: false }));

module.exports = app;
