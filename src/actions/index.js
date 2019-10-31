function booksLoaded(newBooks) {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks
  };
}
function booksRequested() {
  return {
    type: "FETCH_BOOKS_REQUEST"
  };
}
function booksError(error) {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error
  };
}

export function bookAddedToCart(bookId) {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId
  };
}

export function bookRemovedFromCart(bookId) {
  return {
    type: "BOOK_REMOVED_FROM_CART",
    payload: bookId
  };
}

export function allBooksRemovedFromCart(bookId) {
  return {
    type: "ALL_BOOKS_REMOVED_FROM_CART",
    payload: bookId
  };
}

export function fetchBooks(bookstoreService, dispatch) {
  return () => {
    dispatch(booksRequested());
    bookstoreService
      .getBooks()
      .then(data => dispatch(booksLoaded(data)))
      .catch(error => dispatch(booksError(error)));
  };
}
