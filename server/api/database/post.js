// Post method for posting a fact
const { getDb } = require('../../db')

function addRandomFact(req, res) {
    
    const collection = getDb().collection('TestCollection')

    collection.insertOne(req.body)
}

module.exports = addRandomFact