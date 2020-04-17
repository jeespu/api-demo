const express = require('express')
const router = express.Router()
const helloBromeco = require('./api/get')
const getRandomFact = require('./api/database/get')

// Hello Bromeco!
router.get('/', helloBromeco)

// getRandomFact
router.get('/database', (req, res) => {
    // Mitä tähän?
});

// addRandomFact
router.post('/database', (req, res) => {
    // Entä tähän?
})

module.exports = router;