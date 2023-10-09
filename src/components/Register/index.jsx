import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "../Icons/style";
import {
  Button,
  Form,
  Input,
  InputContainer,
  RegisterContainer,
  Title,
  RegisterStatus,
  RegisterErrors,
} from "./style";
import { register } from "../../requests/auth/register";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [registrationStatus, setRegistrationStatus] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await register({ name, email, password });
    if (response.message === "OK") {
      setRegistrationStatus({ status: "success" });
      setTimeout(() => {
        navigate("/Login");
      }, 2000);
    } else {
      setRegistrationStatus({
        status: "error",
        errors: response.data,
      });
    }
  };

  return (
    <RegisterContainer>
      <Form id="registerForm" name="registerForm" onSubmit={handleSubmit}>
        <Title>Read 100+ books,</Title>
        <Title>Join us now</Title>
        <InputContainer>
          <Icon src="../assets/icons/user-16.png"></Icon>
          <Input
            id="registerName"
            value={name}
            type="text"
            placeholder="Enter your name"
            onChange={(event) => setName(event.target.value)}
            required
          ></Input>
        </InputContainer>

        <InputContainer>
          <Icon src="../assets/icons/mail-16.png"></Icon>
          <Input
            id="registerEmail"
            value={email}
            type="email"
            placeholder="Enter your e-mail"
            onChange={(event) => setEmail(event.target.value)}
            required
          ></Input>
        </InputContainer>
        <InputContainer>
          <Icon src="../assets/icons/key-6-16.png"></Icon>
          <Input
            id="registerPassword"
            value={password}
            type="password"
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
            required
          ></Input>
        </InputContainer>
        <Button>Register</Button>
        {registrationStatus.status === "success" && (
          <RegisterStatus>Registration completed!</RegisterStatus>
        )}
        {registrationStatus.status === "error" && (
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
