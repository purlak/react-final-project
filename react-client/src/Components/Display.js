import React, { Component } from 'react';
import '../css/DisplayBooks.css';

const Display = ({book}) => {
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
}

export default Display;
