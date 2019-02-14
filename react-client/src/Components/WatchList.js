import React, { Component } from 'react';
import {connect} from 'react-redux';

class WatchList extends Component {
  render () {
    const { watchList } = this.props
    if (watchList.length === 0) {
      return <p className="text">You do not have any books in your list currently. </p>
    } else {
    return (
      <div>
        {watchList.map(book => <p>
          <ul>
            <li>{book.title}</li>
          </ul>
        </p>)}
      </div>
    )}
  }
}

const mapStateToProps = state => {
  return {
    watchList: state.watchList
  }
}
export default connect(mapStateToProps)(WatchList);
