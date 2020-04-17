const MongoClient = require('mongodb').MongoClient
const url = "mongodb+srv://admin:j7PTGZBkQq5P5erU@cluster0-xcr5r.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true })
let mongodb;

const connectToDb = () => {

    return new Promise((res, rej) => {
        client.connect((err, db) => {

            // Error handling (promise is rejected)
            if (err) {
                console.error('Failed to connect to MongoDB', err)
                return rej(err)
            }

            console.log("Database connection established")

            mongodb = client.db('TestDb')

            res(db)
        })
    })
}

const getDb = () => {
    return mongodb
}

// Export the connecting function and the database init object as named exports
module.exports = {
    connectToDb,
    getDb
}