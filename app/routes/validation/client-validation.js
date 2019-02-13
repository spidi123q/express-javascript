const Joi = require('joi');

module.exports = {

    pincode : {
        params : {
            pincode : Joi.number().required()
        }
    },

    latlng : {
        params : {
            lat : Joi.number().required(),
            lng : Joi.number().required()
        }
    },

    fcmToken : {
        params : {
            token : Joi.string().required()
        }
    },

    placeOrder : {

    }
};