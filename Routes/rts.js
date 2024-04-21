const express = require("express");
const router = express.Router();

const {insertUser} = require('../controller/userdataCtl');
const {signin } = require("../controller/signin");
 

//router.get('/',home);
router.post('/register', insertUser);
router.get('/signin', signin);

module.exports = {router};