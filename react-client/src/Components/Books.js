import React, { Component } from 'react';
// import Display from './Display.js';
import '../css/DisplayBooks.css';
import No_image_available from '../images/No_image_available.png';

class Books extends Component {

  render () {
    if (typeof(this.props.books) === 'undefined'){
      return (<h3>No books found. Try again.</h3>)
    }
    else if (typeof(this.props.books) !== 'undefined' || this.props.books !== null){
      return (
        <div>
          {this.props.books.map(book =>
            <div className="displayBook">
              {book.volumeInfo.imageLinks? (
                <img src={`${book.volumeInfo.imageLinks.smallThumbnail}`} className="imageSize"/>
              ) : (
                <img src={`${No_image_available}`} className="imageSize"/>
              )}

              {book.volumeInfo.title? (
                  <h3 className="displayInfo">{book.volumeInfo.title}</h3>
              ) : (
                  <h3 className="displayInfo">Title: Info N/A</h3>
              )}

              {book.volumeInfo.authors? (
                  <p className="displayInfo">Author: {book.volumeInfo.authors[0]}</p>
              ) : (
                  <p>Author: N/A</p>
              )}

              <button>Add to MyList</button>
            </div>
          )}
          </div>
      )}
  }
}
export default Books;
