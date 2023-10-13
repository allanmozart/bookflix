import { Link } from "react-router-dom";
import styled from "styled-components";

export const DefaultButton = styled(Link)`
  height: ${({ height }) => height || "33px"};
  background: ${({ color }) => color || "red"};
  text-decoration: none;
  color: white;
  font-family: "Paytone One", sans-serif;
  border-radius: 4px;
  width: auto;
  font-size: ${({ size }) => size || "14px"};
  font-weight: 400;
  padding: 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #670101;
  }
`;

export const SelectProfileButton = styled(Link)`
  height: 10vw;
  max-height: 200px;
  max-width: 200px;
  min-height: 84px;
  min-width: 84px;
  width: 10vw;
  display: flex;
  background-color: black;
  background-image: url("https://occ-0-5186-360.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcVQtxEtweK6zD4Y-zfMEXB69Ynk8u4UOuzUzcKXXMwSB2QD1Dzg9digbNMQjQFg4qgA_47oVOKMfPBqzwLFWnjOso6ZNUwN9lkf.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  position: relative;
  text-decoration: none;
`;

export const AddProfileBtn = styled.button`
  height: 10vw;
  max-height: 200px;
  max-width: 200px;
  min-height: 84px;
  min-width: 84px;
  width: 10vw;
  display: flex;
  background-image: url("../../assets/plus-button-icon.jpg");
  background-color: #292525;
  background-size: cover; 
  border-radius: 4px;
  position: relative;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  border-style: none;

  &:hover{
    background-color: #696969;
  }
`;

