import React, { Component } from 'react';
import Search from './Components/Search.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h1 className="welcome">Welcome to the Books Search App!</h1>
          <Search />
        </div>
      </div>
    );
  }
}

export default App;