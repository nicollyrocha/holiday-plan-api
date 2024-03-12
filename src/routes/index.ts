const express = require('express');
const router = express.Router();

const holidaysController = require('../controller/index');

router.get('/holidays', holidaysController.getHolidays);
router.post('/holiday', holidaysController.createHoliday);
router.put('/holiday', holidaysController.updateHoliday);
router.delete('/holiday/:id', holidaysController.deleteHoliday);

module.exports = router;
