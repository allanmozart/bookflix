import { useEffect, useState } from "react";
import { RequireAuth } from "../RequireAuth/RequireAuth";
import getBooks from "../../api/book";
import { BookList, BookItem, CatalogContainer, BookCover, Paragraph } from "./style";

export default function Catalog() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);


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
        <Paragraph>Loading...</Paragraph>
      ) : (
        <BookList>
          {Array.isArray(books) && books.length > 0 ? (
            books.map((book, bookIndex) => (
              <BookItem key={book.id}>
                <BookCover
                  onClick={() =>
                    setSelectedIndex(bookIndex)
                  }
                  src={book.book_cover}
                  alt={`${book.title}cover`}
                ></BookCover>
                  {selectedIndex === bookIndex && (<><h2 style={{ fontSize: "145%" }}>{book.title}</h2>
                  <p>Year: {book.year}</p>
                  <p>Description: {book.description}</p></>)}
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
