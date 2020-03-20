import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { v1 as uuidv1 } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: 'Loading...',
      dbItems: []
    }
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    // Make a request to our Express server running on port 5000
    axios.get('http://localhost:5000')
    .then(res => {
      // Sets the response object's 'message' value into the client's state.
      this.setState({response: res.data.message})
    })
    .catch(() => {
      this.setState({response: "Server not responding. Start the server and refresh this page."})
    })
  }

  // Function to query MongoDB
  callDatabase = () => {
    if (this.state.dbItems.length === 0) {
      axios.get('http://localhost:5000/database')
      .then(res => {
      res.data.content.forEach(item => {
        var content = item.content;
        this.setState({
          dbItems: [...this.state.dbItems, content]
        });
      });
    })
  }
}

  render() {

    const facts = this.state.dbItems.map(item => {
      return ( <li key={uuidv1()}>{item}</li> );
    })

    return (
      <div id="App">
        <h1 className="my-4">{this.state.response}</h1>
        <Button variant="primary" size="lg" onClick={this.callDatabase}>Get some random facts from MongoDB</Button>
        <ul className="my-4">
          {facts}
        </ul>
      </div>
    );
  }
}

export default App;
