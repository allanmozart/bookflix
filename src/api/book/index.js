import axios from 'axios';
import { getAuthToken } from '../auth/login';
import { ENDPOINT } from '../../utils/urls';

export async function insertBook(title, description, year, bookCover) {
  const token = getAuthToken();
  const bookBody = {
    title,
    description,
    year,
    book_cover: bookCover,
  };

  try {
    const response = await axios.post(ENDPOINT.book, bookBody, {
      headers: {
        Authorization: token,
      },
    });
    return { message: 'OK', data: response.data };
  } catch (error) {
    return {
      message: 'Error occurred',
      data: error.response.data.errors,
    };
  }
}

export async function getMyBooks(id) {
  try {
    const response = await axios.get(ENDPOINT.book);

    return {
      books: response.data.data.filter((book) => book.user.id === id),
      loading: false,
    };
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

export default async function getBooks() {
  try {
    const response = await axios.get(ENDPOINT.book);

    return { books: response.data.data, loading: false };
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}
