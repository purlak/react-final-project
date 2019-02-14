export const addBook = (book) => {
  return dispatch => {
    dispatch ({
      type: 'ADD_BOOK',
      payload: book
    })
  }
}
