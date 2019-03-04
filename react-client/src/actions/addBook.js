export const addBook = (book) => {
  console.log('C')
  return dispatch => {
    dispatch ({
      type: 'ADD_BOOK',
      payload: book
    })
  }
  console.log('D')
}
