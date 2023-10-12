import axios from 'axios';
import { useState, useEffect } from 'react';
import { bookUrl } from '../../utils/urls';

export default function getBooks() {
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

  return { books, loading };
}
