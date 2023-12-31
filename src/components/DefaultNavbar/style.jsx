import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(28, 28, 28, 0.4);
  align-items: center;
`;

export const NavbarContainer = styled.div`
  display: flex;
`;

export const LinkNavbar = styled(Link)`
  display: flex;
  color: aliceblue;
  text-decoration: none;
  font-size: 30px;
  margin: 0 30px;
  align-items: center;

  &:hover {
    border-bottom: 2px solid red;
  }
`;

export const NameDisplay = styled.button`
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: 'Paytone One', sans-serif;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid red;
  }
`;

export const ProfileDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  padding-right: 30px;
`;
