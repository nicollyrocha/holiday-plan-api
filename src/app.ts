import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { router } from './server/routes';
const bodyparser = require('body-parser');

const app = express();

app.use(cors());

app.use(express.json());
app.use(router);
app.use(bodyparser.urlencoded({ extended: false }));

export default app;
