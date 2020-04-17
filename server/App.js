const app = require('express')();
const express = require('express')
const router = require('./router');
const { connectToDb, getDb } = require('./db');
const cors = require('cors');

connectToDb()
    .then(() => {
        // We are connected!

        // Handle cross-origin resource sharing issue
        app.use(cors());

        // Enable the usage of req.body to process the axios request properly
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

        app.use(router);

        app.listen(5000, () => {
            console.log('App listening on port 5000')
        })
    })
    .catch(() => {
        // When we can't connect to the database
        process.exit(1);
    })