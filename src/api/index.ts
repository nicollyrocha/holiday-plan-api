import { Router } from 'express';
const holidayController = require('../../controllers/holidays.controller');

const router = Router();

router.get('/holiday', holidayController.getHolidays);
router.post('/holiday', holidayController.createHoliday);
router.put('/holiday', holidayController.updateHoliday);
router.delete('/holiday/:id', holidayController.deleteHoliday);

export { router };
