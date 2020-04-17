const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://admin:j7PTGZBkQq5P5erU@cluster0-xcr5r.mongodb.net/test?retryWrites=true&w=majority";

const db = new MongoClient(url, {useUnifiedTopology: true, useNewUrlParser: true});

//     const dbo = db.db("TestDb").collection("TestCollection");
//     dbo.find({}).toArray((err, result) => {
//         if (err) throw err;

//         // Finally, close the connection
//         db.close();

module.exports = db;