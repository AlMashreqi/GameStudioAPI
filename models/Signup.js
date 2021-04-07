const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: false,
        default: null
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
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