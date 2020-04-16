import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ListElement from './components/ListElement';
import { helloBromeco, getRandomFact } from './services/CallAPI';

const App = () => {

  const [fact, setFact] = useState();
  const [response, setResponse] = useState('Loading...');

  useEffect(() => {
    helloBromeco()
      .then(res => {
        setResponse(res);
      })
  }, [])

  // Map the database content to individual list elements
  // const facts = dbItems.map(item => {
  //   return (<ListElement>{item}</ListElement>);
  // })

  let showFact = () => {
    getRandomFact()
      .then(res => {
        setFact(res.content);
      })
  }

  return (
    <div id="App">
      <h1 className="my-4">{response}</h1>
      <Button variant="primary" size="lg" onClick={() => showFact()}>Fetch a random fact</Button>
      <ul className="my-4">
        <ListElement>{fact}</ListElement>
      </ul>
    </div>
  );
}

export default App;