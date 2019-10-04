import React from 'react';
import axios from 'axios';
import './App.css';

import PlayersList from './Components/playersList';
import NavBar from './Components/NavBar';

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
        <NavBar/>
        <PlayersList players={this.state.players}/>
      </div>
    );
  }
}

export default App;
