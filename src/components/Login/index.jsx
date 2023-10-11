import { useState } from 'react';
import { Button, Form, Input, LoginContainer, Title } from './style';
import { verifyUser } from '../../requests/auth/login';
import { Paragraph } from '../../pages/LoginPage/style';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await verifyUser(email, password);
    setMessage(response.data.message);

    if (response?.message === 'OK') {
      console.log(response.data);
      setTimeout(() => {
        navigate('/catalog');
      }, 2000);
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
        />
        <Input
          id="userPassword"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button>Login</Button>
      </Form>
      <Paragraph>{message || null}</Paragraph>
    </LoginContainer>
  );
}

export default Login;
