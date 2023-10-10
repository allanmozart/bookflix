import styled from 'styled-components'; 


export const CatalogContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const BookList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const BookItem = styled.li`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
