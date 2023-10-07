import axios from 'axios';
import { loginUrl } from '../../helpers/urls';

export async function verifyUser(email, password) {
  const profile = axios
    .post(loginUrl, {
      email,
      password,
    })
    .then((response) => response.data.data)
    .catch((e) => console.error(e));

  return profile;
}
