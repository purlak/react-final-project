import React, { Component } from 'react';
import Search from './Components/Search.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
