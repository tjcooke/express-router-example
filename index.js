const express = require('express');

const PORT = 3001;

const thinkpadRouter = require('./routes/thinkpad')

const app = express();

app.use('/thinkpad', thinkpadRouter);

app.listen(PORT, () => {
    console.log(`Now listening on port: ${PORT}`)
})