import {
  BookCover,
  BookItem,
  BookList,
  Paragraph,
  RecoveryImage,
} from "../MyBookList/style";
import PropTypes from "prop-types";
import missingImage from "../../assets/missingImage.png"

export function MyBookList({ books }) {
  return (
    <BookList>
      {Array.isArray(books) && books.length > 0 ? (
        books.map((book) => (
          <BookItem key={book.id}>
            <BookCover data={book.book_cover} alt={`${book.title} cover`}>
              <RecoveryImage src={missingImage} />
            </BookCover>
          </BookItem>
        ))
      ) : (
        <Paragraph>No books available.</Paragraph>
      )}
    </BookList>
  );
}

MyBookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      book_cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
