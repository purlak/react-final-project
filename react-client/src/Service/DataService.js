import React from 'react';
import '../css/DisplayBooks.css';


const DataService = {
  searchBook (data, key) {
    switch (key)  {

    case ('title'):
      return (
        <div> <h2 className="displayInfo">Title: {data}</h2> </div>
      )
    case ('authors'):

    case ('imageLinks'):

    default:
      return;
    }
  }


}

export default DataService;
