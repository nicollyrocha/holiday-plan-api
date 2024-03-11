import 'express-async-errors';
import express from 'express';
import { Router } from 'express';
import cors from 'cors';
const bodyparser = require('body-parser');
import { router } from './server/routes/index';
const holidayController = require('../../controllers/holidays.controller');

const app = express();
const PORT = process.env.PORT || 5000;
const routerExpress = Router();

app.use(cors());

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});
/* router.get('/', holidayController.getHolidays);
router.post('/holiday', holidayController.createHoliday);
router.put('/holiday', holidayController.updateHoliday);
router.delete('/holiday/:id', holidayController.deleteHoliday); */
app.use(express.json());
app.use('/', router);
app.use(bodyparser.urlencoded({ extended: false }));

module.exports = app;
