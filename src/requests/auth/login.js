import axios from 'axios';
import { loginUrl } from '../../helpers/urls';

export async function login(email, password) {
  console.log(loginUrl);
  console.log('Email:', email);
  console.log('Password:', password);
  const response = await axios
    .post(loginUrl, {
      email,
      password,
    })
    .then((response) => response.data.data);

  console.log(response);
}
