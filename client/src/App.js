import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ListElement from './components/ListElement';
import { helloBromeco, getRandomFact, addRandomFact } from './services/CallAPI';

const App = () => {

  const [fact, setFact] = useState();
  const [response, setResponse] = useState('Loading...');
  const [factInput, setFactInput] = useState('')

  const minCharacters = 8

  useEffect(() => {
    // Initially show a random fact
    showFact()
    // Fetch the header message from the server
    helloBromeco()
      .then(res => {
        setResponse(res);
      })
  }, []) // Prevent unnecessary renders with []

  // Fetches the random fact picked by the server
  const showFact = () => {
    // Conceals an axios API call
    getRandomFact()
      .then(res => {
        // Set the fetched fact to state
        setFact(res)
      })
  }

  // Posts the typed fact to database
  const postFact = () => {
    // Clear the input field to prevent spamming
    setFactInput('')
    // Conceals an axios POST request that uses user input as the parameter
    addRandomFact(factInput)
  }

  return (
    <div id="App">

      {/* "Get a random fact" -part */}
      <h1 className="my-4">{response}</h1>
      <Button variant="primary" size="lg" onClick={() => showFact()}>Get a random fact</Button>
      <ul className="my-4">
        <ListElement>
            <b>Fact:</b> {fact}
        </ListElement>
      </ul>

      {/* "Post a fact" -part */}
      <h2 className="my-4">Post a fact</h2>
      <p>(Minimum of {minCharacters} characters)</p>
      <input type="text" value={factInput} onChange={e => setFactInput(e.target.value)}/>
      <Button 
        disabled={factInput.length < minCharacters ? 1 : 0} 
        variant="primary" 
        size="md" 
        onClick={() => postFact()}
        >Submit
      </Button>
    </div>
  );
}

export default App;