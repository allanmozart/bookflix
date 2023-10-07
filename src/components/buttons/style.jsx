import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DefaultButton = styled(Link)`
  height: ${({ heightSize }) => heightSize || '33px'};
  background: ${({ color }) => color || 'red'};
  text-decoration: none;
  color: white;
  font-family: 'Paytone One', sans-serif;
  border-radius: 4px;
  width: auto;
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: 600;
  padding: 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #670101;
  }
`;
