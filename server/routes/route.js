const ctr1User = require('../controllers/controller')
const express = require('express');
//const authroutes = require('./authorization');

const router = express.Router();
router.post('/login',ctr1User.login);
router.post('/register', ctr1User.register);
// router.post('/dashboard', ctr1User.dashboard);
//router.use('/auth', authroutes);
//router.post('/forgotPassword', ctr1User.forgotPassword);
//router.get('/getAllUsers',ctr1User.getAllUser);
//router.post('/resetPassword', ctr1User.resetPassword)

module.exports = router;