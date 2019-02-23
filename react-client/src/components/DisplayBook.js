import React, { Component } from 'react';
import '../css/DisplayBooks.css';
import No_image_available from '../images/No_image_available.png';

class DisplayBook extends Component {
  render () {
    const {book} = this.props
    console.log(this.props)
    return  (
      <div className="displayBook">
        {book.volumeInfo.imageLinks? (
          <img src={`${book.volumeInfo.imageLinks.smallThumbnail}`} className="imageSize" alt=""/>
        ) : (
          <img src={`${No_image_available}`} className="imageSize" alt=""/>
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
        </div>
    )
  }
}

export default DisplayBook;
