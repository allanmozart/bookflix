import { useState } from 'react';
import {
  AddProfileBtn,
  Paragraph,
  ProfileContainer,
  ProfileList,
  SelectProfileButton,
  Title,
} from './style';
import { AddNewProfileModal } from '../AddNewProfileModal';
import { ProfileUpdate } from '../UpdateProfileModal';
import { useUser } from '../UserContext/User';
import { getFirstName } from '../../utils/firstName';

export function Profile() {
  const [addProfile, setAddProfile] = useState(false);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const { userData } = useUser();

  function openModal() {
    setAddProfile(true);
  }

  function showUpdateProfileForm() {
    setShowUpdateProfile(true);
  }

  return (
    <ProfileContainer>
      {!addProfile && !showUpdateProfile && (
        <div>
          <Title>{`Who's Reading?`}</Title>
          <ProfileList>
            <li onClick={showUpdateProfileForm}>
              <SelectProfileButton
                style={{
                  marginRight: '10px',
                  backgroundImage: `url(${userData.profile_picture})`,
                }}
              />
              <Paragraph style={{ fontSize: '18px' }}>
                {getFirstName(userData.name)}
              </Paragraph>
            </li>
            <li>
              <AddProfileBtn onClick={openModal} />
              <Paragraph style={{ fontSize: '14px' }}>Add Profile</Paragraph>
            </li>
          </ProfileList>
        </div>
      )}
      {addProfile && (
        <AddNewProfileModal closeModal={() => setAddProfile(false)} />
      )}
      {showUpdateProfile && (
        <ProfileUpdate closeModal={() => setShowUpdateProfile(false)} />
      )}
    </ProfileContainer>
  );
}
