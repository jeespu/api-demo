const { getDb } = require('../../db') // The database object

function getRandomFact(req, res) {
    
    // "Select" the proper collection
    const collection = getDb().collection('TestCollection')

    // Pick a random document from the specified collection
    collection.aggregate({ $sample: { size: 1 } },
        (err, cursor) => {

        // Error handling
        if (err) {
            console.error('Could not pick a document', err)
            return
        }

        cursor.toArray()
            .then(document => {
                // The response
                res.send(document)
            })
    })
}

module.exports = getRandomFact