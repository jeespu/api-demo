const app = require('express')();
const Database = require('./routes/Database');

// 'cors' takes care of a cross-origin resource sharing issue,
// that emerges when calling an API from a different port but the same host, like in this case.
const cors = require('cors');
app.use(cors());

// Route, from which the client gets its database data.
// When you navigate to 'localhost:5000/database' with the server running, you'll find a JSON.
app.use('/database', Database);

// When the client sends a GET request to plain 'localhost:5000', this function sends the response.
app.get('/', (req, res) => {
    res.send({
        message: "Hello Bromeco!"
    });
})

// Set server to run on port 5000.
app.listen(5000, () => {
    console.log('App listening on port 5000');
});