import React, { Component  } from 'react';
import '../App.css';

class Contact extends Component {

  render() {
    return (
      <div className="watchlist">
        <p className="headertext">Contact Information:</p>
        <p className="text"> XYZ Inc. </p>
        <p className="text">Avenue at Brooklyn</p>
        <p className="text">New York, NY</p>
        <p className="text">Email: <a href="mailto:contact@xyz.com">contact@xyz.com</a></p>
        <p className="text">Phone: 1800-XYZ-CALL</p>
      </div>
    )
  }
}
export default Contact;
