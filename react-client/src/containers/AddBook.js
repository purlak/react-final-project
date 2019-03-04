import React, { Component } from 'react';
import DisplayBook from '../components/DisplayBook.js';
import '../App.css';
import {addBook} from '../actions/addBook.js'
import {  connect } from 'react-redux'

class AddBook extends Component {
  addBook = () => {
    console.log('A')
    const {title, publisher, imageLinks} = this.props.book.volumeInfo
    const bookObj = {
      title, publisher, imageLinks
    }
    fetch (`http://localhost:3001/books`, {
      method: 'POST',
      body: JSON.stringify({book: bookObj}),
      headers: {
        "Content-Type": 'application/json'
      }
    }).then(res => res.json().then(book => {
      console.log('B')
      this.props.addBook(book)}))
    console.log('E')
  }
  render ()  {
    const { book  } = this.props
    return (
        <div className="displayBook">
          <DisplayBook book={book}/>
          <button onClick={this.addBook}>Add to MyList</button>
        </div>
    )
  }
}
export default connect(null, {  addBook })(AddBook);
