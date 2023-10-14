import { useState } from 'react';
import { Link } from "react-router-dom";

import { MainHeader } from "../../components/MainHeader";
import { Logo } from "../../components/Logo";
import { SelectProfileModal } from "../../components/Modal";

import {
  Page,
  Title,
  Paragraph,
  ProfileList,
  AddProfileBtn,
  SelectProfileButton,
} from "./style";

export default function ProfilePage() {
  const [isVisible, setIsVisible] = useState(false);

  function openModal(){
    setIsVisible((isVisible) => !isVisible);
  }

  return (
    <>
      <MainHeader>
        <Link to="/">
          <Logo
            src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
            alt="Bookflix Logo"
          />
        </Link>
      </MainHeader>
      <Page>
        <div>
          <div>
            <Title>Who's Reading?</Title>
            <ProfileList>
              <li>
                <SelectProfileButton style={{ marginRight: "10px" }} />
                <Paragraph style={{ fontSize: "14px" }}>Allan</Paragraph>
              </li>
              <li>
                <AddProfileBtn onClick={openModal}/>
                <Paragraph style={{ fontSize: "14px" }}>Add Profile</Paragraph>
              </li>
            </ProfileList>
          </div>
          {isVisible && <SelectProfileModal/>}
        </div>
      </Page>
    </>
  );
}
