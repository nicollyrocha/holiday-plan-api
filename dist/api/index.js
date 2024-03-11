"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const holidayController = require('../../controllers/holidays.controller');
const router = (0, express_1.Router)();
exports.router = router;
router.get('/holiday', holidayController.getHolidays);
router.post('/holiday', holidayController.createHoliday);
router.put('/holiday', holidayController.updateHoliday);
router.delete('/holiday/:id', holidayController.deleteHoliday);
//# sourceMappingURL=index.js.map