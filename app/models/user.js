const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fcmToken: {
        type :Array
    },
    userId: {
        type: String,
        required: true
    }
})

const User = module.exports = mongoose.model('user', userSchema);

module.exports.getUser = (userId) => {
    return User.findOne({
        userId: userId
    });
};