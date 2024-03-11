"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bodyparser = require('body-parser');
const index_1 = require("./api/index");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use(index_1.router);
app.use(bodyparser.urlencoded({ extended: false }));
module.exports = app;
//# sourceMappingURL=index.js.map