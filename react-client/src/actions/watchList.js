export const fetchWatchList =() => {
  return dispatch => {
    return fetch (`localhost:3001/books`)
      .then(res => res.json())
      .then (books => dispatch({type: 'FETCH_BOOKS_SUCCESS', payload: books}))

  }
}
