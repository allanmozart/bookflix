import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: flex;
  justify-content: center;
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
  margin: 70px 15px;
`;

export const BookItem = styled.li`
  color: white;
  margin: 8px;
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
  font-family: "Helvetica", sans-serif;
  color: white;
`;

export const BookCover = styled.img`
  width: 55%;

  &:hover {
    width: 70%;
  }
`;
