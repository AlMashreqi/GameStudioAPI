const express = require('express');
const router = express.Router();

router.get('/api/users/forgot-password', (req, res) => {
    res.send('forgot-password check');
});

module.exports = router;