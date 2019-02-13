const Joi = require('joi');

module.exports = {
    orderStatus: {
        body : {
            orderId : Joi.string().required()
        }
    }
}