import React, {Component} from 'react';

const About = () => {
  // render () {
    return (
      <div className="watchlist">
        <p className="headertext">About this App:</p>
        <p className="text"> This App uses a React/Redux front end and a Rails backend. It connects to GoogleBooks API to search for books and allows the user to save the book to their WatchList/BookList. </p>
        <p className="text"> For more information visit: <a href="https://developers.google.com/books/">Google Books API</a></p>
      </div>
    )
  // }
}
export default About;
