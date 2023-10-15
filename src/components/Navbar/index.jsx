import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  width: 100vw;
  background-color: rgba(28, 28, 28, 0.4);
  align-items: center;
  padding: 10px;
  margin-right
`;

export const NavbarContainer = styled.div`
display: flex;
margin-left: 50%;
height: 40px;
`;

export const LinkNavbar = styled.a`
  display: flex;
  color: aliceblue;
  text-decoration: none;
  margin: 0 30px;
  align-items: center;

  &:hover {
    border-bottom: 2px solid red;
  }
`;