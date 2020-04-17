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
            return res.data[0].content;
        })
        .catch(err => {
            throw err;
        })
    }

const addRandomFact = (input) => {
    return axios
        .post('http://localhost:5000/database', { content: input })
        .then(res => {
            return
        })
        .catch(err => {
            console.error('Error updating records.', err)
        })
}

export {
    helloBromeco,
    getRandomFact,
    addRandomFact
}