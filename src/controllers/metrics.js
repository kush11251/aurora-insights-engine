const express = require('express');
const router = express.Router();
const MetricsModel = require('../models/metrics');

router.get('/', async (req, res) => {
    const metrics = await MetricsModel.find();
    res.json(metrics);
});

module.exports = router;