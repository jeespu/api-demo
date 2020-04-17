// Post method for posting a fact
const { getDb } = require('../../db')

function addRandomFact(req, res) {
    
    const collection = getDb().collection('TestCollection')

    console.log(req.params)

    collection.insert({
        content: "Dummy content"
    })
}

module.exports = addRandomFact