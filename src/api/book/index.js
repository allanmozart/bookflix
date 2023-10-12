import axios from 'axios';
import { bookUrl } from '../../utils/urls';

export async function insertBook(title, description, year, bookCover) {
  try {
    const response = await axios.post(bookUrl, {
      title,
      description,
      year,
      bookCover,
    });
    return { message: 'OK', data: response.data };
  } catch (error) {
    return {
      message: 'Error occurred',
      data: error.response.data.errors,
    };
  }
}
