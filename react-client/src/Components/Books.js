import React, { Component } from 'react';
import AddBook from '../containers/AddBook.js';

class Books extends Component {

  render () {
    if (typeof(this.props.books) === 'undefined'){
      return (<h3>No books found. Try again.</h3>)
    }
    else if (typeof(this.props.books) !== 'undefined' || this.props.books !== null){
      return (
        <div>
          {this.props.books.map(book => <AddBook key={book.title} book={book} />)}
        </div>
      )}
  }
}
export default Books;
