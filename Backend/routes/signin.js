// routes/signin.js
const express = require('express');
const router = express.Router();
const siginController = require('../controller/signinController');

router.post('/', siginController.loginUser);

module.exports = router;
