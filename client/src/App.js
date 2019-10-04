import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: [],
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/api/players')
    .then(response => {
      this.setState({players: response.data})
    })
    .catch(error => console.log(error))
  }

  render(){
    return(
      <div className="App">
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
