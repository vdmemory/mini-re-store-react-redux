import React from "react";
import BookListItem from "../book-list-item";

import "./book-list.css";

export default function BookList({ books, onAddedToCart }) {
  return (
    <ul className="book-list">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
}
