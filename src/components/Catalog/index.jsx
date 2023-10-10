import { RequireAuth } from '../RequireAuth/RequireAuth'
import { useState, useEffect } from 'react';
import { bookUrl } from '../../helpers/urls';
import { BookList, BookItem, CatalogContainer, Paragraph } from './style';
import axios from 'axios';

export default function Catalog() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(bookUrl)
    .then((response) => {
      setBooks(response.data); 
      setLoading(false); 
    })
    .catch((error) => {
      console.error('Error fetching books:', error);
      setLoading(false); 
    });
}, []);
  
  if (loading) {
      return <Paragraph>Loading...</Paragraph>
  } else {
      return (
          <CatalogContainer>
            <RequireAuth />
            <Paragraph>Catalog</Paragraph>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <BookList>
                    {books.map((book) => (
                        <BookItem key={book.id}>
                            <h2>{book.title}</h2>
                            <p>Year: {book.year}</p> 
                            <p>Description: {book.description}</p>
                            <img
                                src={book.book_cover} 
                                alt={`${book.title} cover`}
                            /> 
                        </BookItem>
                    ))}
                </BookList>
                )}
            </CatalogContainer>
      )}}

