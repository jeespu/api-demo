const express = require('express');
const router = express.Router();
const helloMessage = require('./api/get');

router.get('/', (req, res) => {
    res.send(helloMessage());
})

router.get('/database', (req, res) => {
    
});

router.post('/database', (req, res) => {
    // Entä tähän?
})

module.exports = router;