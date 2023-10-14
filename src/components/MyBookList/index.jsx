import { BookCover, BookItem, BookList } from '../MyBookList/style';
import PropTypes from 'prop-types';

export function MyBookList({ books }) {
  return (
    <BookList>
      {Array.isArray(books) && books.length > 0 ? (
        books.map((book) => (
          <BookItem key={book.id}>
            <BookCover
              src={book.book_cover}
              alt={`${book.title} cover`}
            ></BookCover>
          </BookItem>
        ))
      ) : (
        <p>No books available.</p>
      )}
    </BookList>
  );
}

MyBookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      book_cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
