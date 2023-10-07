import { useState } from 'react';
import { Button, Form, Input, LoginContainer, Title } from './style';
import { verifyUser } from '../../requests/auth/login';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyUser(email, password);
      setProfile(response);
      console.log(profile);
    } catch (error) {
      console.error('Erro ao verificar usuário:', error);
    }
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button>Login</Button>
      </Form>
    </LoginContainer>
  );
}

export default Login;
