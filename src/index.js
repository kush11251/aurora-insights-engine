const express = require('express');
const app = express();
const mongoose = require('mongodb').mongoose;
const MetricsController = require('./controllers/metrics');

app.use('/metrics', MetricsController);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});