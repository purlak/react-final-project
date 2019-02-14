export default (state=[], action) => {
  switch(action.type) {
    case 'FETCH_WATCHLIST_SUCCESS':
      return action.payload;
    case 'ADD_BOOK':
      return state.concat(action.payload)
    default:
      return state;
  }
}
