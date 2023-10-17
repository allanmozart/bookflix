import styled from 'styled-components';

export const LoginContainer = styled.div`
  margin-top: 70px;
  max-width: 800px;
  margin: 75 auto;
  padding: 80px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 250px;
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
  cursor: pointer;

  &:hover {
    background-color: #790505;
  }
`;

export const NoAccountContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding-top: 10px;
  font-size: 15px;
  font-weight: 400;
  max-width: 200px;
  font-family: 'Helvetica', sans-serif;
  color: white;
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  flex-wrap: wrap;
  font-size: 25px;
  color: white;
`;
