export const fetchWatchList =() => {
  return dispatch => {
    return fetch (`http://localhost:3001/books`)
      .then(res => res.json())
      .then (books => dispatch({type: 'FETCH_WATCHLIST_SUCCESS', payload: books}))
  }
}
