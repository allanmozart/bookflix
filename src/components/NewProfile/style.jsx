import styled from 'styled-components';

export const Form = styled.div`
  height: 400px;
  width: 600px;
  padding: 100px;
  background: rgba(0, 0, 0, 0.7);
`;

export const Title = styled.h1`
  text-align: start;
  color: white;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  background-size: cover;
  border-radius: 4px;
  background-color: black;
  background-image: url('src/assets/netflix-default-profile-picture.jpg');
`;

export const Input = styled.input`
  padding: 10px;
  background: rgba(61, 61, 61);
  color: white;
  width: 350px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImageContainer = styled.div`
  padding: 20px;
`;
export const ProfileInputContainer = styled.div`
  padding: 20px;
`;
