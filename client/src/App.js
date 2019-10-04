import React from 'react';
import axios from 'axios';
import './App.css';

import PlayersList from './Components/playersList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: [],
    }
  }

  componentDidMount(){
    this.mounted = true;
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
        <PlayersList players={this.state.players}/>
      </div>
    );
  }
}

export default App;
