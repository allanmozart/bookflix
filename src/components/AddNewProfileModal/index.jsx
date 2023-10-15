import { DefaultButton } from "../buttons/style";
import { Title, Form, ProfileImage, Input } from "./style";

export const AddNewProfileModal = (closeModal) => {
  const handleCancel = () => {
    closeModal();
  }

  return (
    <>
      <Form style={{justifyContent: 'left'}}>
        <Title>Add New Profile</Title>

          <ProfileImage />
          <Input placeholder="name" required></Input>
        <DefaultButton style={{ marginTop: '10px'  }}>Submit</DefaultButton>
        <DefaultButton style={{ marginTop: '10px', backgroundColor:'grey' }} onClick={handleCancel}>Cancel</DefaultButton>
      </Form>
    </>
  );
};
