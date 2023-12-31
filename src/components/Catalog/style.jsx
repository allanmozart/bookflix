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
  width: 75%;
  list-style: none;
  margin: 30px auto;
`;

export const BookContainer = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  align-items: center;
  margin: auto;
  flex-direction: column;
`;

export const BookItem = styled.li`
  display: flex;
  justify-items: center;
  flex-direction: column;
  color: white;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 20px 70px;
  padding-top: 30px;
`;

export const BookCover = styled.object`
  height: 300px;

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

export const BookTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 250px;
  margin-top: 10px;
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  color: white;
  flex-wrap: wrap;
  font-size: 25px;
  font-family: 'Paytone One';
`;
