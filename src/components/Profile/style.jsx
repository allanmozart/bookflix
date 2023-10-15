import styled from "styled-components";

export const ProfileContainer = styled.div`
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
  justify-content: center;
`;

export const SelectProfileButton = styled.button`
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
  background-image: url("src/assets/plus-button-icon.jpg");
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