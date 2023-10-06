import { Link } from "react-router-dom";
import styled from "styled-components";

export const DefaultButton = styled(Link)`
  height: 33px;
  background: ${({ color }) => color || 'red'};
  text-decoration: none;
  color: white;
  font-family: "Paytone One", sans-serif;
  border-radius: 4px;
  width: auto;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 15px;
`;
