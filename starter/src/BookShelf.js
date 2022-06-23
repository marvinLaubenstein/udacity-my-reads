import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

/** TODO: -Note the size of the book cover*/

const BookShelf = ({ books, onBookUpdate }) => {
  const handleBookOptionChange = (bookData, option) => {
    console.log(
      'Option in booksearch: ' + option + ' (' + bookData.title + ') '
    );
    onBookUpdate(bookData, option);
  };
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            {books.map((book) => console.log(book))}
            <ol className="books-grid">
              {books
                .filter((book) => book.shelf === 'currentlyReading')
                .map((currentlyReadingBook) => (
                  <li key={currentlyReadingBook.id}>
                    <Book
                      key={currentlyReadingBook.id}
                      bookData={currentlyReadingBook}
                      onBookOptionChange={handleBookOptionChange}
                    ></Book>
                  </li>
                ))}
            </ol>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              {' '}
              <ol className="books-grid">
                {books
                  .filter((book) => book.shelf === 'wantToRead')
                  .map((currentlyReadingBook) => (
                    <li key={currentlyReadingBook.id}>
                      <Book
                        key={currentlyReadingBook.id}
                        bookData={currentlyReadingBook}
                        onBookOptionChange={handleBookOptionChange}
                      ></Book>
                    </li>
                  ))}{' '}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              {' '}
              <ol className="books-grid">
                {books
                  .filter((book) => book.shelf === 'read')
                  .map((currentlyReadingBook) => (
                    <li key={currentlyReadingBook.id}>
                      <Book
                        key={currentlyReadingBook.id}
                        bookData={currentlyReadingBook}
                        onBookOptionChange={handleBookOptionChange}
                      ></Book>
                    </li>
                  ))}{' '}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link className="open-search" to="/search">
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default BookShelf;
