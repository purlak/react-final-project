import React, { Component } from 'react';
import Display from './Display.js';
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

            </div>
          )}
          </div>
      )}
  }
}
export default Books;
