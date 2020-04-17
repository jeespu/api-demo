const app = require('express')();
const router = require('./router');
const db = require('./db');
const cors = require('cors');

db.connect(err => {
    
    if (err) process.exit(1);

    app.use(cors());

    app.use(router);

    app.listen(5000, () => {
        console.log('App listening on port 5000')
    })
})