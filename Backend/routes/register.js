// routes/registerRoute.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/registerController');

router.post('/', userController.registerUser);

module.exports = router;
