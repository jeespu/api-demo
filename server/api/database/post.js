// Post method for posting a fact
const { getDb } = require('../../db')

function addRandomFact(req, res) {
    
    const collection = getDb().collection('TestCollection')

    // Simple as that.
    // Using req.body seems to require extra configuration in App.js.
    collection.insertOne(req.body)
}

module.exports = addRandomFact