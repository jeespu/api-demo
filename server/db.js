const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://admin:j7PTGZBkQq5P5erU@cluster0-xcr5r.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, {useUnifiedTopology: true, useNewUrlParser: true});

const connectToDb = async() => {
    client.connect();
}

module.exports = connectToDb;