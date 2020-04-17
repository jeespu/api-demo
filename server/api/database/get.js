const { getDb } = require('../../db') // The database object

function getRandomFact(req, res) {
    
    const collection = getDb().collection('TestCollection')

    // Find all items in the collection and send them as a JSON array response
    collection.aggregate({ $sample: { size: 1 } }, 
        (err, cursor) => {
        if (err) throw err;

        cursor.toArray()
            .then(document => {
                res.send(document)
            })
    })

        // .then(items => {
        //     res.send(items)
        // })
        // .catch(err => {
        //     console.error('Could not find any records.', err)
        // })
}

module.exports = getRandomFact