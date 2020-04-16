import axios from 'axios';

const helloBromeco = () => {
    // Make a request to our Express server running on port 5000
    return axios.get('http://localhost:5000/')
        .then(res => {
            return res.data.message;
        })
        .catch(() => {
            return 'Server not responding. Start the server and refresh this page.';
        })
    }

// Function to query MongoDB
const getRandomFact = () => {
    return axios.get('http://localhost:5000/database')
        .then(res => {
            return res.data.content[Math.floor(Math.random() * 3)];
        })
        .catch((err) => {
            throw err;
        })
    }

export {
    helloBromeco,
    getRandomFact
}