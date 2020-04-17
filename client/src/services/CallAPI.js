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
            return res.data[0].content
        })
        .catch(err => {
            console.error('Could not fetch any facts', err)
        })
}

// Post a fact to MongoDB
const addRandomFact = customFact => {
    return axios
        .post('http://localhost:5000/database', { content: customFact })
        .then(() => {
            return
        })
        .catch(err => {
            console.error('Error updating records', err)
        })
}

export {
    helloBromeco,
    getRandomFact,
    addRandomFact
}