import React, {Component} from 'react';

class DisplayTitle extends Component {

  render ()   {
    return (
      <ul>
        <li>{this.props.title}</li>
      </ul>
    )
  }
}
export default DisplayTitle;
