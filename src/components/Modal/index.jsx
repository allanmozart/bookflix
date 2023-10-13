// import { useState } from 'react';
import { DefaultButton } from "../buttons/style";
import { Title, Form, ProfileImage, Input, NewProfileContainer } from "./style";

export const SelectProfileModal = () => {
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
