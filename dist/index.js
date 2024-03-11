"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const cors_1 = __importDefault(require("cors"));
const bodyparser = require('body-parser');
const index_1 = require("./server/routes/index");
const holidayController = require('../../controllers/holidays.controller');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const routerExpress = (0, express_2.Router)();
app.use((0, cors_1.default)());
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
app.use(express_1.default.json());
app.use('/', index_1.router);
app.use(bodyparser.urlencoded({ extended: false }));
module.exports = app;
//# sourceMappingURL=index.js.map