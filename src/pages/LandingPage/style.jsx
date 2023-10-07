import styled from 'styled-components';

export const LandingPageUi = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const Paragraph = styled.p`
  flex-wrap: wrap;
  font-size: 25px;
  font-weight: 400;
  font-family: 'Helvetica', sans-serif;
  color: white;
`;

export const Title = styled.h1`
  color: white;
  flex-wrap: wrap;
  font-family: 'Paytone One', sans-serif;
  font-weight: 500;
  font-size: 48px;
  display: block;
  margin: 80px 0 0 0;
`;

export const LadingPage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const EmailContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
