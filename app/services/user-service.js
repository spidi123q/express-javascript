const userModel = require('../models/user');


const getUserById = module.exports.getUserById = (userId) => {
    return userModel.getUser(userId).then(result => {

            return "user";
    });
}