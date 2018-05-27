const express = require('express');
const routesController = require('./routes');

const router = express.Router();

router.use('/routes', routesController);

module.exports = router;