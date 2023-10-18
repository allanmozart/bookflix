import { useEffect, useState } from 'react';
import { MyBookContainer, Paragraph } from './style';
import { getMyBooks } from '../../api/book';
import { MyBookList } from '../MyBookList';
import { useUser } from '../../components/UserContext/User';

export default function MyBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userData } = useUser();

  useEffect(() => {
    async function fetchBooks() {
      try {
        const bookData = await getMyBooks(userData.id);

        setBooks(bookData.books);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  return (
    <>
      <MyBookContainer>
        {loading ? (
          <Paragraph>Loading...</Paragraph>
        ) : (
          <MyBookList books={books} />
        )}
      </MyBookContainer>
    </>
  );
}
