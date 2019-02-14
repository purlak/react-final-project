import React, { Component } from 'react';
import {connect} from 'react-redux';

class WatchList extends Component {
  render () {
    const { watchList } = this.props
    return (
      <div>
        {watchList.map(book => <p>{book.title}</p>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    watchList: state.watchList
  }
}
export default connect(mapStateToProps)(WatchList);
