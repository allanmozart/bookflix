import styled from "styled-components";

export const BookList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 0;
`;

export const BookItem = styled.li`
  color: white;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const BookCover = styled.object`
  width: 350px;
  height: 450px;
`;

export const RecoveryImage = styled.img`
  width: 350px;
  height: 450px;
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  flex-wrap: wrap;
  font-size: 25px;
  color: white;
`;

export const Button = styled.button`
  margin: 0px 10px;
  padding: 10px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-family: "Paytone One", sans-serif;
  width: 120px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #790505;
  }
`;
