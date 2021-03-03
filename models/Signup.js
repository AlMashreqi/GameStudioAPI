const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
    name: {
        type: String,
        required: false,
        default: null
    },
    email: {
        type: String,
        required: true
    },
    password:  {
        type: String,
        required: true
    },
    passwordConfirm:  {
        type: String,
        required: true
    },
    userId:  {
        type: String,
        required: false,
        default: null
    }
})

module.exports = mongoose.model('Signup', signupSchema);