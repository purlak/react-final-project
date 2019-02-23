import React, {Component} from 'react';

class About extends Component {
  render () {

    return (
      <div className="watchlist">
        <p className="headertext">About this App:</p>
        <p className="text"> This App uses a React/Redux front end and Rails backend. It connects to GoogleBooks API to search for books and allows the user to save the book to their WatchList/BookList. </p>
      </div>
    )
  }
}

export default About;
