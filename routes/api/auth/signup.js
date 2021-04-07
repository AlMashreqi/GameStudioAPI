const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Signup = require('../../../models/Signup');

router.post('/', async (req, res) => {
    const signup = new Signup({
        data: {
            _id: mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            userId: req.body.userId
        }        
    });

    try{
        const user = await signup.save();
        res.status(200).json(user);
    } catch(err){
        res.status(400).json({ error: err});
    }
});


module.exports = router;