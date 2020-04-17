const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://admin:j7PTGZBkQq5P5erU@cluster0-xcr5r.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, {useUnifiedTopology: true, useNewUrlParser: true});
let mongodb;

const connectToDb = () => {

    return new Promise((res, rej) => {
        client.connect((err, db) => {

            if (err) {
                console.error('Failed to connect to MongoDB', err)
                return rej(err)
            }

            console.log("Database connection established")
            mongodb = db
            res(db)
        })
    })
}

module.exports = {
    connectToDb, 
    mongodb
}