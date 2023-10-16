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
  width: 95%;
  list-style: none;
  margin: 30px auto;
`;

export const BookItem = styled.li`
display: flex;
justify-content: center;
flex-direction: column;
  color: white;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.1);
  width: 20%;
  height: 55%;
  margin: 3%;

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
  color: white;
`;

export const BookCover = styled.object`
display: flex;
justify-content: center;
  height: 320px;


  &:hover {
    height: 320px;
  }
`;

export const RecoveryImage = styled.img`
  height: 300px;

  &:hover {
    height: 320px;
  }
`;
