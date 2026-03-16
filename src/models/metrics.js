const mongoose = require('mongoose');
const metricsSchema = new mongoose.Schema({
    name: String,
    value: Number
});

module.exports = mongoose.model('Metrics', metricsSchema);