import React, { Component } from 'react';
import DataService from '../Service/DataService.js';

class Display extends Component {

  getOrDefault = (key, volumeInfo) => {
    if (volumeInfo[key]) {
      return DataService.searchBook(volumeInfo[key], key)
    }
    return (
      <h2 className="displayInfo">{ key.charAt(0).toUpperCase() + key.slice(1)}: N/A</h2>
    )
  }

  render () {
    const { volumeInfo } = this.props.book
    const keys = ['title', 'authors', 'imageLinks']
    return (
      <div>
      keys.map((key) => {
        return (
          <div>
          { this.getOrDefault(key, volumeInfo) }
          </div>
        )}
      <button>Add</button>
      </div>
      )
    )
  }
}

export default Display;
