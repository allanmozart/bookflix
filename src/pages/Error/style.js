import styled from "styled-components";

export const ErrorPageBg = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: no-repeat center center/cover;
  background-image: url("../../assets/bgBookflixError.jpg");
`;

export const Title = styled.h1`
width: 35%;
  color: white;
  flex-wrap: wrap;
  font-family: "Paytone One", sans-serif;
  font-weight: 500;
  font-size: 50px;
  display: flex;
  align-items: center;
  margin: 280px 0 0 130px;
`;
export const Paragraph = styled.p`
  width: 35%;
  flex-wrap: wrap;
  font-size: 18px;
  font-weight: 400;
  font-family: "Helvetica", sans-serif;
  color: white;
  display: flex;
  align-items: center;
  margin-left: 130px;
`;
