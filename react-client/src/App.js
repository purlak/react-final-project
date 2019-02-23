import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './containers/Search.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h1 className="welcome">Welcome to the Book Tracker App!</h1>
          <Router>
            <Switch>
              <Route exact path='/' component={Search} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
