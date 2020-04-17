const express = require('express');
const router = express.Router();
// const database = require('./api/database/get');
// const root = require('./api/get');

// When the client sends a GET request to plain 'localhost:5000', this function sends the response.
router.get('/', (req, res) => {
    res.send({
        message: "Hello Bromeco!"
    });
})

router.get('/database', (req, res) => {
    res.send({
        // Function from ./api/database/get.js
    });
});

module.exports = router;