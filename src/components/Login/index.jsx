import { useState } from 'react';
import {
  Button,
  Form,
  Input,
  LoginContainer,
  NoAccountContainer,
  Title,
} from './style';
import { verifyUser } from '../../api/auth/login';
import { Paragraph } from '../../pages/LoginPage/style';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext/User';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const { setUserData, userData } = useUser();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await verifyUser(email, password);

    if (response?.message === 'OK') {
      setUserData(response.data.data);
      setTimeout(() => {
        navigate('/catalog');
      }, 2000);
    } else {
      setMessage(response.data.message);
    }
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form id="loginForm" name="loginForm" onSubmit={handleSubmit}>
        <Input
          id="userEmail"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <Input
          id="userPassword"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Button>Login</Button>
      </Form>

      <NoAccountContainer>
        {`Don't have an account?`}
        <Link to={'/register'} style={{ color: 'white' }}>
          Sign-up
        </Link>
      </NoAccountContainer>
      <Paragraph color="white">{message || null}</Paragraph>
      {userData.name !== null && (
        <Paragraph>Welcome, {userData.name}!</Paragraph>
      )}
    </LoginContainer>
  );
}

export default Login;
