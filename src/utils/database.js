const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/aurora-insights-engine', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;