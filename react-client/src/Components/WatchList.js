import React, { Component } from 'react';

// const watchList = [
//   {title: ""}
// ]

class WatchList extends Component {
  render () {
    const { watchList } = this.props
    return (
      <div>
        {watchList.map(book)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    watchList: state.watchList
  }
}
export default connect(mapStateToProps)WatchList;
