const express = require('express');
const { getCryptos } = require('../controllers/cryptoController');
const router = express.Router();

router.get('/', getCryptos);

module.exports = router;
