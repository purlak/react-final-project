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
        <input
          type="text"
          onChange={this.handleSearchInput}
          onKeyPress=""
          value=""
          placeholder=""
        />
        <button onClick=""></button>
      </div>
    )
  }
}

export default Search;
