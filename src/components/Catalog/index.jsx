import { useEffect, useState } from "react";
import { RequireAuth } from "../RequireAuth/RequireAuth";
import getBooks from "../../api/book";
import { BookList, BookItem, CatalogContainer, BookCover, Paragraph, RecoveryImage} from "./style";

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
                  onClick={() => setSelectedIndex(bookIndex)}
                  data={book.book_cover}
                  alt={`${book.title}cover`}>
                  <RecoveryImage src={"/missingImage.png"} />
                </BookCover>

                {selectedIndex === bookIndex && (
                  <>
                    <h2 style={{ fontSize: "145%" }}>{book.title}</h2>
                    <p><b>Year:</b> {book.year}</p>
                    <p><b>Description:</b> {book.description}</p>
                  </>
                )}
              </BookItem>
            ))
          ) : (
            <Paragraph>No books available.</Paragraph>
          )}
        </BookList>
      )}
    </CatalogContainer>
  );
}
