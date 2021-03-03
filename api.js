const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

app.use(bodyParser.json());

const signupRouter = require('./routes/signup');

app.use('/api/users/signup', signupRouter);

mongoose.connect(process.env.DB_CONNECTION, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    },    
    () => console.log('Connected to DB')
);

app.listen(3000, () => console.log('Listening on Port 3000'));