const app = require('express')();
const router = require('./router');
const { connectToDb } = require('./db');
const cors = require('cors');

connectToDb()
    .then(() => {
        app.use(cors());

        app.use(router);

        app.listen(5000, () => {
            console.log('App listening on port 5000')
        })
    })
    .catch(() => {
        process.exit(1);
    })