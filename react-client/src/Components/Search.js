import React, { Component } from 'react';

const api_url = 'https://www.googleapis.com/books/v1'

class Search extends Component {

  constructor () {
    super ()
    this.state = {
      searchTerm: '',
      books: []
    }
  }
  handleSearchInput = event => {
    this.setState({searchTerm: event.target.value });
  }

  searchBook = () => {

  }

  render () {
    return (
      <div>
        <input className="searchBar"
          type="text"
          onChange={this.handleSearchInput}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.searchBook()
            }
          }}
          value={this.state.searchTerm}
          placeholder="search books"
        />
        <button onClick={this.searchBook}>Search</button>
      </div>
      <Books />
    )
  }
}

export default Search;
