import React, { Component } from 'react';
import {connect} from 'react-redux';
import DisplayTitle from '../components/DisplayTitle.js';

class WatchList extends Component {
  render () {
    const { watchList } = this.props
    if (watchList.length === 0) {
      return <p className="text">You do not have any books in your list currently. </p>
    } else {
    return (
      <div>
        {watchList.map(book => <p>
          <DisplayTitle title={book.title} />
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
