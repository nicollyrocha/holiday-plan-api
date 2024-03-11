import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { router } from './src/server/routes';
const bodyparser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => res.send('Express on Vercel'));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());
app.use(router);
app.use(bodyparser.urlencoded({ extended: false }));

module.exports = app;
