import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Search from './containers/Search.js';
import About from './components/About.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h1 className="welcome">Welcome to the Book Tracker App!</h1>
          <Router>
            <div>
              <div>
                <Link to='/'className="">Search</Link>  &nbsp;
                <Link to='/about'>About</Link>  &nbsp;
                <Link to='/contact'>Contact</Link>
              </div>
              <Switch>
                <Route exact path='/' component={Search} />
                <Route path='/search' component={Search} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={ () => <div>Contact company@email.com</div> } />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
