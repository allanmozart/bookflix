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

export const NameDisplay = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: white;
`;

export const ProfileDisplay = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-right: 30px;
`;
