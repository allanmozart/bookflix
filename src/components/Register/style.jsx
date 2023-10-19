import styled from 'styled-components';

export const RegisterContainer = styled.div`
  max-width: 50%;
  margin: 75 auto;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: start;
  color: #ffffffee;
  font-size: 70px;
  text-align: center;
  margin: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

export const Input = styled.input`
  margin-top: 15px;
  padding: 10px;
  background: transparent;
  width: 400px;
  color: white;
  border: 1px solid white;
  display: flex;
  padding-left: 40px;

  &::placeholder {
    color: #ffffffb1;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  font-family: "Paytone One", sans-serif;
  &:hover {
    background-color: #790505;
  }
`;

export const RegisterStatus = styled.div`
  font-weight: bold;
  font-size: larger;
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  background: transparent;
  width: 400px;
  color: white;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
`;

export const RegisterErrors = styled.ul`
  list-style-type: none;
  margin-bottom: 0px;
`;
