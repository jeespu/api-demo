const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
// Of course, normally you should use env variables, but for this purpose this will do.
const url = "mongodb+srv://admin:j7PTGZBkQq5P5erU@cluster0-xcr5r.mongodb.net/test?retryWrites=true&w=majority";

// Connect to MongoDB using MongoClient.
MongoClient.connect(url, ({useUnifiedTopology: true}), (err, db) => {
    if (err) throw err;
    const dbo = db.db("TestDb").collection("TestCollection");
    dbo.find({}).toArray((err, result) => {
        if (err) throw err;

        // When the React client makes a request to 'localhost:5000/database', it gets this MongoClient result back
        router.get('/', (req, res) => {
            res.send({
                content: result
            });
        });
        
        // Finally, close the connection
        db.close();
    });
});

module.exports = router;