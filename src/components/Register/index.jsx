import { Icon } from '../Icons/style';
import {
  Button,
  Form,
  Input,
  InputContainer,
  RegisterContainer,
  Title,
} from './style';

export function Register() {
  return (
    <RegisterContainer>
      <Form>
        <Title>Read 100+ books,</Title>
        <Title>Join us now</Title>
        <InputContainer>
          <Icon src="../assets/icons/user-16.png"></Icon>
          <Input
            id="registerName"
            type="text"
            placeholder="Enter your name"
          ></Input>
        </InputContainer>

        <InputContainer>
          <Icon src="../assets/icons/mail-16.png"></Icon>
          <Input
            id="registerEmail"
            type="email"
            placeholder="Enter your e-mail"
          ></Input>
        </InputContainer>
        <InputContainer>
          <Icon src="../assets/icons/key-6-16.png"></Icon>
          <Input
            id="registerPassword"
            type="password"
            placeholder="Enter your password"
          ></Input>
        </InputContainer>
        <Button>Register</Button>
      </Form>
    </RegisterContainer>
  );
}
