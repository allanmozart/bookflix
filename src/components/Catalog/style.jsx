import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: Arial, sans-serif;
  align-items: center;
`;

export const BookList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  list-style: none;
  margin: 30px 15px;
`;

export const BookItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.1);
  width: 20%;
  height: 50%;
  margin: 5%;

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
  font-family: "Helvetica", sans-serif;
  color: white;
`;

export const BookCover = styled.object`
  height: 400px;

  &:hover {
    height: 420px;
  }
`;

export const RecoveryImage = styled.img`
  height: 400px;

  &:hover {
    height: 420px;
  }
`;
