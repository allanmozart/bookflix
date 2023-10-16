import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../Icons/style';
import {
  Button,
  Form,
  Input,
  InputContainer,
  RegisterContainer,
  Title,
  RegisterStatus,
  RegisterErrors,
} from './style';
import { register } from '../../api/auth/register';
import { verifyUser } from '../../api/auth/login';
import { Paragraph } from '../../pages/LoginPage/style';

export function Register() {
  const [email, setEmail] = useState(
    new URLSearchParams(document.location.search).get('email')
  );
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [registrationStatus, setRegistrationStatus] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const registrationResponse = await register({ name, email, password });
    if (registrationResponse.message === 'OK') {
      setRegistrationStatus({ status: 'success' });
      const loginResponse = await verifyUser(email, password);
      if (loginResponse.message === 'OK') {
        setTimeout(() => {
          navigate('/catalog');
        }, 2000);
      }
    } else {
      setRegistrationStatus({
        status: 'error',
        errors: registrationResponse.data,
      });
      if (registrationResponse.data[0] === 'Duplicate email') {
        setTimeout(() => {
          navigate('/login');
        }, 4000);
      }
    }
  };

  return (
    <RegisterContainer>
      <Form id="registerForm" name="registerForm" onSubmit={handleSubmit}>
        <Title>Read 100+ books,</Title>
        <Title>Join us now</Title>
        <InputContainer>
          <Icon src="src/assets/icons/user-16.png"></Icon>
          <Input
            id="registerName"
            value={name}
            type="text"
            placeholder="Enter your name"
            onChange={handleNameChange}
            required
          ></Input>
        </InputContainer>

        <InputContainer>
          <Icon src="src/assets/icons/mail-16.png"></Icon>
          <Input
            id="registerEmail"
            value={email}
            type="email"
            placeholder="Enter your e-mail"
            onChange={handleEmailChange}
            required
          ></Input>
        </InputContainer>
        <InputContainer>
          <Icon src="src/assets/icons/key-6-16.png"></Icon>
          <Input
            id="registerPassword"
            value={password}
            type="password"
            placeholder="Enter your password"
            onChange={handlePasswordChange}
            required
          ></Input>
        </InputContainer>
        <Button>Register</Button>

        <Paragraph>
          Already have an account?
          <Link to={'/login'} style={{ color: 'white' }}>
            Sign in
          </Link>
        </Paragraph>

        {registrationStatus.status === 'success' && (
          <RegisterStatus>
            Registration completed. Welcome to Bookflix!
          </RegisterStatus>
        )}
        {registrationStatus.status === 'error' && (
          <div>
            <RegisterStatus>
              The register has failed due to:
              <RegisterErrors>
                {registrationStatus.errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </RegisterErrors>
            </RegisterStatus>
          </div>
        )}
      </Form>
    </RegisterContainer>
  );
}
