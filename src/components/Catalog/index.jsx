import { useEffect } from 'react';
import { RequireAuth } from '../RequireAuth/RequireAuth';
import getBooks from '../../api/auth/books';
import {
  BookList,
  BookItem,
  CatalogContainer,
  Paragraph,
  BookCover,
} from './style';

export default function Catalog() {
  const { books, loading } = getBooks();

  useEffect(() => {}, [books]);

  if (loading) {
    return <Paragraph>Loading...</Paragraph>;
  } else {
    return (
      <CatalogContainer>
        <RequireAuth />
        <Paragraph>Catalog</Paragraph>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <BookList>
            {Array.isArray(books) && books.length > 0 ? (
              books.map((book) => (
                <BookItem key={book.id}>
                  <h2>{book.title}</h2>
                  <p>Year: {book.year}</p>
                  <p>Description: {book.description}</p>
                  <BookCover
                    src={book.book_cover}
                    alt={`${book.title}cover`}
                  ></BookCover>
                </BookItem>
              ))
            ) : (
              <p>No books available.</p>
            )}
          </BookList>
        )}
      </CatalogContainer>
    );
  }
}
