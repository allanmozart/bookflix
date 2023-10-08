import axios from 'axios';
import { loginUrl } from '../../helpers/urls';

export async function verifyUser(email, password) {
  try {
    const response = await axios.post(loginUrl, {
      email,
      password,
    });
    return { message: 'OK', data: response.data };
  } catch (error) {
    return { message: 'Error occurred', data: error.response.data };
  }
}
