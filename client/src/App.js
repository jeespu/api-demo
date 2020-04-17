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
  const [factInputButton, disableFactInputButton] = useState(0)

  useEffect(() => {
    helloBromeco()
      .then(res => {
        console.log(res)
        setResponse(res);
      })
  }, [])

  const showFact = () => {
    getRandomFact()
      .then(res => {
        setFact(res)
      })
  }

  const postFact = () => {
    setFactInput('')
    disableFactInputButton(1)
    addRandomFact(factInput)
    disableFactInputButton(0)
  }

  return (
    <div id="App">
      <h1 className="my-4">{response}</h1>
      <Button variant="primary" size="lg" onClick={() => showFact()}>Get a random fact</Button>
      <ul className="my-4">
      <ListElement>
          Fact: {fact}
        </ListElement>
      </ul>
      <h2 className="my-4">Post a fact</h2>
      <input type="text" value={factInput} onChange={e => setFactInput(e.target.value)}/>
      <Button disabled={factInputButton} variant="primary" size="md" onClick={() => postFact()}>Submit</Button>
    </div>
  );
}

export default App;