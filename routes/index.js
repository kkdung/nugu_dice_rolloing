const express = require('express');
const nugu = require('../nugu');
const router = express.Router();

router.post(`/nugu/rolling_action`, nugu);


module.exports = router;
