import axios from 'axios';

// Get the "Hello Bromeco!" header from the server
const helloBromeco = () => {
    return axios.get('http://localhost:5000/')
        .then(res => {
            return res.data.message;
        })
        .catch(() => {
            return 'Server not responding. Start the server and refresh this page.';
        })
    }

// Get a random fact from MongoDB
const getRandomFact = () => {
    return axios.get('http://localhost:5000/database')
        .then(res => {
            return res.data.content[Math.floor(Math.random() * 3)];
        })
        .catch(err => {
            throw err;
        })
    }

const addRandomFact = () => {
    console.log('Nothing here yet');
}

export {
    helloBromeco,
    getRandomFact,
    addRandomFact
}