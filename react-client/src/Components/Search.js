import React, { Component } from 'react';

class Search extends Component {

  constructor () {
    super ()
    this.state = {
      searchTerm: '',
      books: []
    }
  }
  handleSearchInput = () => {

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
