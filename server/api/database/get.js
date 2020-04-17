const { getDb } = require('../../db') // The database object

function getRandomFact(req, res) {
    
    const collection = getDb().collection('TestCollection')

    // Find all items in the collection and send them as a JSON array response
    collection.find({}).toArray()
        .then(items => {
            res.send(items)
        })
        .catch(err => {
            console.error('Could not find any records.', err)
        })
}

module.exports = getRandomFact