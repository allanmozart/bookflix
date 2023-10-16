import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: row;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 10px;
  flex-wrap: wrap;
  font-size: 15px;
  font-weight: 400;
  max-width: 200px;
  font-family: 'Helvetica', sans-serif;
  color: white;
`;
