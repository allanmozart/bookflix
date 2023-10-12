import { RequireAuth } from '../RequireAuth/RequireAuth';
import { useState, useEffect } from 'react';
import { bookUrl } from '../../helpers/urls';
import {
  BookList,
  BookItem,
  CatalogContainer,
  Paragraph,
  BookCover,
} from './style';
import axios from 'axios';

export default function Catalog() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(bookUrl)
      .then((response) => {
        setBooks(response.data.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        setLoading(false);
      });
  }, []);

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
                  <h2 style={{ fontSize: "145%" }}>{book.title}</h2>
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
