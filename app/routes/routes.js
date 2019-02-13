var express = require('express');
var router = express.Router();
const userController = require('../controllers/user-controller');
console.log('TCL: userController', userController)

router.get('/user', userController.getUser);

module.exports = router;