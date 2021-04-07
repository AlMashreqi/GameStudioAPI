const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

app.use(bodyParser.json());

const signupRouter = require('./routes/api/auth/signup');
const forgotPasswordRouter = require('./routes/api/auth/forgot-password');

app.use('/api/users/forgot-password', forgotPasswordRouter);
app.use('/api/users/signup', signupRouter);

mongoose.connect(process.env.DB_CONNECTION, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    },    
    () => console.log('Connected to DB')
);

app.listen(3000, () => console.log('Listening on Port 3000'));