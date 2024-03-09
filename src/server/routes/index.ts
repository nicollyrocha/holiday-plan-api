import { Router } from 'express';
const holidayController = require('../../controllers/holidays.controller');

const router = Router();

router.get('/', holidayController.getHolidays);
router.post('/holiday', holidayController.createHoliday);

export { router };
