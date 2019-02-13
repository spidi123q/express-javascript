const express = require('express');
const validate = require('express-validation');
const router = express.Router();
const successResponse = require('../middleware/default-response').successResponse
const errorResponse = require('../middleware/default-response').errorResponse

const userService = require('../services/user-service');

module.exports.getUser = async (req, res) => {
    let result = await userService.getUserById('e')
    successResponse(res, result)
}




