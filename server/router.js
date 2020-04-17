const express = require('express')
const router = express.Router()
const helloBromeco = require('./api/get')
const getRandomFact = require('./api/database/get')
const addRandomFact = require('./api/database/post')

// Hello Bromeco!
router.get('/', helloBromeco)

// getRandomFact
router.get('/database', getRandomFact)

// addRandomFact
router.post('/database', addRandomFact)

module.exports = router;