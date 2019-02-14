import React, { Component } from 'react';
import '../css/DisplayBooks.css';
import No_image_available from '../images/No_image_available.png';

class Display extends Component {
  addBook = () => {
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
    }). then(res => res.json().then(book => console.log(book)))
  }
  render ()  {
    const { book  } = this.props
    return (
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
          <button onClick={this.addBook}>Add to MyList</button>
        </div>
    )
  }
}

export default Display;
