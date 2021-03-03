const express = require('express');
const router = express.Router();
const Signup = require('../models/Signup');

router.post('/', async (req, res) => {
    const signup = new Signup({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        userId: req.body.userId        
    });

    try{
        const user = await signup.save();
        res.json(user);
    } catch(err){
        res.json({ error: err});
    }
});


module.exports = router;