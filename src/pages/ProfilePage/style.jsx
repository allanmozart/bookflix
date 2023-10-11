import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 3.5vw;
  font-weight: 400;
  width: 100%;
  font-family: "Helvetica", sans-serif;
  color: white;
  align-content: end;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 25px;
  font-weight: 400;
  font-family: "Helvetica", sans-serif;
  color: white;
  align-content: end;
  /* text-align: center; */
`;

export const ProfileList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  text-align: center;
`;
