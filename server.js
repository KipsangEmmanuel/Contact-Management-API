const express = require('express');
const erroHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json())



app.use('/api/contacts', require('./routes/contactRoutes'));
app.use(erroHandler);

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})