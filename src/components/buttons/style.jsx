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

export const AddProfileBtn = styled(Link)`
  height: 10vw;
  max-height: 200px;
  max-width: 200px;
  min-height: 84px;
  min-width: 84px;
  width: 10vw;
  display: flex;
  background-image: url("../../assets/plus-button-icon.jpg");
  /* background-repeat: no-repeat; */
  background-size: cover; 
  border-radius: 4px;
  position: relative;
  text-decoration: none;
  justify-content: center;
  align-items: center;
`;


/* export const AddProfileBtn2 = () => {
  return (
    <>
      <button >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-plus-circle"
        >
          <circle cx="12" cy="12" r="10"></circle>

          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      </button>
    </>
  );
}; */

