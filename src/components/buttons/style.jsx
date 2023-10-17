import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DefaultButton = styled(Link)`
  height: ${({ height }) => height || '33px'};
  background: ${({ color }) => color || 'red'};
  text-decoration: none;
  color: white;
  font-family: 'Paytone One', sans-serif;
  border-radius: 4px;
  width: auto;
  font-size: ${({ size }) => size || '14px'};
  font-weight: 400;
  padding: 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #670101;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-family: sans-serif;
  width: 150px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #790505;
  }
`;

export const LogoutButton = styled.button`
  height: ${({ height }) => height || '33px'};
  background: ${({ color }) => color || 'red'};
  text-decoration: none;
  color: white;
  font-family: 'Paytone One', sans-serif;
  border-radius: 4px;
  width: auto;
  font-size: ${({ size }) => size || '14px'};
  font-weight: 400;
  padding: 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #670101;
  }
`;
