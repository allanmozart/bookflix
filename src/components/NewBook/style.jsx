import styled from 'styled-components';

// Styled components for your login form
export const NewBookContainter = styled.div`
  margin-top: 20px;
  max-width: 70%;
  margin: 75 auto;
  padding: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: start;
  color: #ffffffee;
  font-size: 50px;
  text-align: center;
  margin: 0px;
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
  margin-top: 25px;
  padding: 10px;

  background-color: #00000094;
  width: 400px;
  color: white;
  border: 1px solid white;
  text-align: center;

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
  font-family: "Paytone One", sans-serif;
  font-size: 16px;
  width: 150px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #790505;
  }
`;

export const TextArea = styled.textarea`
  margin-top: 15px;
  padding: 10px;
  background-color: #00000094;
  width: 400px;
  height: 150px;
  color: white;
  border: 1px solid white;
  text-align: center;
  font-family: Arial, sans-serif;
  &::placeholder {
    color: #ffffffb1;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 10px;
  flex-wrap: wrap;
  font-size: 30px;
  font-weight: 400;
  max-width: 400px;
  font-family: 'Paytone One', sans-serif;
  color: white;
`;
