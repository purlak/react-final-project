import React, { Component } from 'react';

class Search extends Component {

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
