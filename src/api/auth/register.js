import axios from 'axios';
import { ENDPOINT } from '../../utils/urls';

export async function register({ name, email, password }) {
  try {
    const response = await axios.post(ENDPOINT.register, {
      name,
      email,
      password,
    });
    return { message: 'OK', data: response.data };
  } catch (error) {
    return {
      message: 'Error occurred',
      data: error.response.data.errors,
    };
  }
}
