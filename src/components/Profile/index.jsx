import { useState } from "react";
import { AddProfileBtn, Paragraph, ProfileContainer, ProfileList, SelectProfileButton, Title } from "./style";
import { AddNewProfileModal } from "../AddNewProfileModal";

export function Profile() {
  const [addProfile, setAddProfile] = useState(false);

  function openModal() {
    setAddProfile(true);
  }

  return (
    <ProfileContainer>
      {!addProfile && (
        <div>
          <Title>{`Who's Reading?`}</Title>
          <ProfileList>
            <li>
              <SelectProfileButton style={{ marginRight: "10px" }} />
              <Paragraph style={{ fontSize: "14px" }}>Allan</Paragraph>
            </li>
            <li>
              <AddProfileBtn onClick={openModal} />
              <Paragraph style={{ fontSize: "14px" }}>Add Profile</Paragraph>
            </li>
          </ProfileList>
        </div>
      )}
      {addProfile && <AddNewProfileModal closeModal={() => setAddProfile(false)} />}
    </ProfileContainer>
  );
}
