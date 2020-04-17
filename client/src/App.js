import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ListElement from './components/ListElement';
import { helloBromeco, getRandomFact, addRandomFact } from './services/CallAPI';

const App = () => {

  const [fact, setFact] = useState();
  const [response, setResponse] = useState('Loading...');

  useEffect(() => {
    helloBromeco()
      .then(res => {
        setResponse(res);
      })
  }, [])

  const showFact = () => {
    getRandomFact()
      .then(res => {
        setFact(res.content);
      })
  }

  return (
    <div id="App">
      <h1 className="my-4">{response}</h1>
      <Button variant="primary" size="lg" onClick={() => showFact()}>Get a random fact</Button>
      <ul className="my-4">
        <ListElement>{fact}</ListElement>
      </ul>
      <h2 className="my-4">Post a fact</h2>
      <input type="text"/>
      <Button variant="primary" size="md" onClick={() => addRandomFact()}>Submit</Button>
    </div>
  );
}

export default App;