import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ListElement from './components/ListElement';

const App = () => {

  const [dbItems, setDbItems] = useState([]);
  const [response, setResponse] = useState('Loading...');

  useEffect(() => {
    callAPI();
  })

  const callAPI = () => {
    // Make a request to our Express server running on port 5000
    axios.get('http://localhost:5000')
      .then(res => {
        // Sets the response object's 'message' value into the client's state.
        setResponse(res.data.message);
      })
      .catch(() => {
        setResponse('Server not responding. Start the server and refresh this page.');
      })
  }

  // Function to query MongoDB
  const callDatabase = () => {
    if (dbItems.length === 0) {
      axios.get('http://localhost:5000/database')
        .then(res => {
          res.data.content.forEach(item => {
            var content = item.content;
            setDbItems([...dbItems, content])
          });
      })
    }
  }

    // Map the database content to individual list elements
    const facts = dbItems.map(item => {
      return (<ListElement>{item}</ListElement>);
    })

    return (
      <div id="App">
        <h1 className="my-4">{response}</h1>
        <Button variant="primary" size="lg" onClick={callDatabase}>Get some random facts from MongoDB</Button>
        <ul className="my-4">
          {facts}
        </ul>
      </div>
    );
}

export default App;