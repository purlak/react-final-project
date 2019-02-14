import React, { Component } from 'react';


class Display extends Component {

  render () {
    const { volumeInfo } = this.props.book
    const keys = ['title', 'authors', 'publisher', 'imageLinks', 'infoLink']
    return (
      keys.map((key) => {
        return (
          <div>{ this.getOrDefault(key, volumeInfo) }</div>
        )
      })
    )
  }
}

export default Display;
