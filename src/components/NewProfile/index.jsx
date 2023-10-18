import { DefaultButton } from '../buttons/style';
import {
  Title,
  Form,
  ProfileImage,
  Input,
  ProfileContainer,
  ProfileImageContainer,
  ProfileInputContainer,
} from './style';

export const NewProfile = (closeModal) => {
  const handleCancel = () => {
    closeModal();
  };

  return (
    <>
      <Form style={{ justifyContent: 'left' }}>
        <Title>Add New Profile</Title>
        <ProfileContainer>
          <ProfileImageContainer>
            <ProfileImage />
          </ProfileImageContainer>
          <ProfileInputContainer>
            <Input placeholder="Name" required></Input>
          </ProfileInputContainer>
        </ProfileContainer>
        <DefaultButton>Submit</DefaultButton>
        <DefaultButton
          style={{ backgroundColor: 'grey' }}
          onClick={handleCancel}
        >
          Cancel
        </DefaultButton>
      </Form>
    </>
  );
};
