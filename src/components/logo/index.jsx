import styled from 'styled-components';

export const Logo = styled.img`
  height: 6vh;
`;

export const LogoHuge = styled.img`
  height: 60%;
  display: flex;
  position: relative;

  @media (max-width: 1024px) {
    height: 30%;
  }

  @media (max-width: 768px) {
    height: 20%;
  }
`;

export const LogoB = styled.p`
  color: #b40000;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 50rem;
  text-transform: uppercase;
`;
