import { useState } from "react";

import ProfilePage from "../../pages/ProfilePage";

import { DefaultButton } from "../buttons/style";
import { Title, Form, ProfileImage, Input, NewProfileContainer } from "./style";

export const SelectProfileModal = () => {
  const [isFormSubmit, setFormSubmit] = useState(null);

  const handleFormSubmit = (e) => {
    setFormSubmit(e.target.value)
  }
  return (
    <>
      <Form style={{justifyContent: 'left'}}>
        <Title>Add New Profile</Title>

        <div>
          <ProfileImage />
          <Input placeholder="name"></Input>
        </div>
        <DefaultButton style={{ marginTop: '10px'  }}>Continue</DefaultButton>
        <DefaultButton style={{ marginTop: '10px', backgroundColor:'grey' }}>Cancel</DefaultButton>
      </Form>
    </>
  );
};
