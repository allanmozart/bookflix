import { useEffect, useState } from 'react';
import { getAuthToken } from '../../api/auth/login';
import { DefaultButton } from '../buttons/style';
import { Form, ProfileImage } from '../NewProfile/style';
import {
  ButtonContainer,
  EmailInput,
  InputName,
  Paragraph,
  ProfileContainer,
  ProfileImageContainer,
  ProfileInputContainer,
  Title,
  UpdateProfileContainer,
} from './style';
import { profile, updateProfile } from '../../api/profile/profile';
import { useNavigate } from 'react-router-dom';

export function ProfileUpdate(closeModal) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [token, setToken] = useState('');
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function getProfile() {
      const userToken = setToken(getAuthToken());
      const response = await profile(userToken);
      setName(response.data.data.name);
      setEmail(response.data.data.email);
      setProfileImage(response.data.data.profile_picture);
    }

    getProfile();
  }, []);

  const handleCancel = () => {
    closeModal();
  };

  const handleSubmitUpdateProfile = (e) => {
    e.preventDefault();

    updateProfile(token, email, name, profileImage)
      .then((result) => {
        if (result.message === 'OK') {
          setIsProfileUpdated(true);

          setTimeout(() => {
            navigate('/catalog');
          }, 2000);
        } else {
          console.error(
            "Error trying to update the user's profile",
            result.data
          );
        }
      })
      .catch((error) => {
        console.error("Error trying to update the user's profile", error);
      });
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <UpdateProfileContainer>
      <Form>
        <Title>Update Profile</Title>
        <ProfileContainer>
          <ProfileImageContainer>
            <ProfileImage style={{ backgroundImage: `url(${profileImage})` }} />
          </ProfileImageContainer>

          <ProfileInputContainer>
            <InputName
              placeholder="Name"
              type="text"
              value={name}
              onChange={handleName}
              required
            ></InputName>
            <EmailInput
              placeholder="Email"
              type="text"
              value={email}
              onChange={handleEmail}
              required
            ></EmailInput>
          </ProfileInputContainer>
        </ProfileContainer>
        <ButtonContainer>
          <DefaultButton onClick={handleSubmitUpdateProfile}>
            Submit
          </DefaultButton>
          <DefaultButton
            style={{ marginTop: '10px', backgroundColor: 'grey' }}
            onClick={handleCancel}
          >
            Cancel
          </DefaultButton>
        </ButtonContainer>
        {isProfileUpdated && <Paragraph>Profile is Updated!</Paragraph>}
      </Form>
    </UpdateProfileContainer>
  );
}
