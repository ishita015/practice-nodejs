const express = require('express');
const router = express.Router();
const detailCon = require('../controller/detailController');
router.post('/add', detailCon.addUser);
module.exports = router;
