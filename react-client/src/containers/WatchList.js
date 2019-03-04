import React, { Component } from 'react';
import {connect} from 'react-redux';
import DisplayTitle from '../components/DisplayTitle.js';
import '../App.css';
import Like from './Like.js';


class WatchList extends Component {
  constructor () {
    super ();
    // this.state = {
    //   counter: 0
    // }
  }

  render () {
    // console.log(this.state.counter)
    const { watchList } = this.props
    if (watchList.length === 0) {
      return <p className="text">You do not have any books in your list currently. </p>
    } else {
    return (
      <div>
        {watchList.map(book => <p>
          <div className="displayButton">
            <DisplayTitle title={book.title} />
            <Like />
          </div>
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
