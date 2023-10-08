import styled from 'styled-components';

// Styled components for your login form
export const LoginContainer = styled.div`
  margin-top: 80px;
  max-width: 700px;
  margin: 75 auto;
  padding: 65px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 1%;
`;

export const Title = styled.h2`
  text-align: start;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-top: 15px;
  padding: 10px;
  background: rgba(61, 61, 61);
  color: white;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-family: sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #790505;
  }
`;
