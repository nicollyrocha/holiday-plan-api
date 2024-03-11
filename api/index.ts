import dotenv from 'dotenv';
dotenv.config();

const PORT = parseInt(`${process.env.PORT || 3000}`);

const { app } = require('../app');

app.listen(PORT, () => console.log(`Server is running at ${PORT}.`));
