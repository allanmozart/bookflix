import styled from "styled-components";

export const Form = styled.div`
  margin-top: 80px;
  max-width: 700px;
  height: 500px;
  width: 700px;
  padding: 100px;
  background: rgba(0, 0, 0, 0.9);
`;

export const Title = styled.h1`
  text-align: start;
  color: white;
`;

export const ProfileImage = styled.img`
  max-width: 180px;
  max-height: 180px;
  min-height: 100px;
  min-width: 100px;
  background-size: cover;
  border-radius: 4px;
  text-decoration: none;
  background-color: black;
  background-image: url("src/assets/netflix-default-profile-picture.jpg");
  margin-right: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  background: rgba(61, 61, 61);
  color: white;
`;