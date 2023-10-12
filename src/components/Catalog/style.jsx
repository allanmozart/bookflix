import styled from 'styled-components';

export const CatalogContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
`;

export const BookList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const BookItem = styled.li`
  color: white;
  margin: 13px;
  padding: 15px 0;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 5px;
  background-color: transparent;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 30%;

  &:hover {
    background-color: rgba(200, 200, 200, 0.4);

  }
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  flex-wrap: wrap;
  font-size: 25px;
  font-weight: 400;
  font-family: 'Helvetica', sans-serif;
  color: white;
`;

export const BookCover = styled.img`
  width: 28%;

  &:hover {
    width: 29%;

  }
`;
