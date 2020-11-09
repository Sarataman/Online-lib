import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
  return (
    <div className="book-list">
      {props.books.map((book, i) => {
        return (
          <BookCard
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            publishedDate={book.volumeInfo.publishedDate}
            bookLink={book.accessInfo.webReaderLink}
          />
        );
      })}
    </div>
  );
};

export default BookList;
