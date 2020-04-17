const MongoClient = require('mongodb').MongoClient
const url = "mongodb+srv://admin:j7PTGZBkQq5P5erU@cluster0-xcr5r.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true })
let mongodb; // Will contain the database object

const connectToDb = () => {

    // When we are connected, respond with res(),
    // and when something goes wrong, we use rej()
    return new Promise((res, rej) => {

        client.connect((err, db) => {

            // Error handling (promise is rejected)
            if (err) {
                console.error('Failed to connect to MongoDB', err)
                return rej(err)
            }

            console.log("Database connection established!")

            // Assign a pointer to "mongodb" variable
            mongodb = client.db('TestDb')

            // Respond with "resolved"
            res(db)
        })
    })
}

// Seemed to be the only way to export the database object properly
const getDb = () => {
    return mongodb
}

// Export the connecting function and the database init object (return function) as named exports
module.exports = {
    connectToDb,
    getDb
}