import { useEffect, useState } from "react";
import { RequireAuth } from "../RequireAuth/RequireAuth";
import getBooks from "../../api/book";
import { BookList, BookItem, CatalogContainer, BookCover } from "./style";

export default function Catalog() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const bookData = await getBooks();
        setBooks(bookData.books);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  return (
    <CatalogContainer>
      <RequireAuth />

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
