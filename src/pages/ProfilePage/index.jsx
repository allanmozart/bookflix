import { Profile } from '../../components/Profile';
import DefaultNavbar from '../../components/DefaultNavbar';
import { ProfilePageUi } from './style';
export default function ProfilePage() {
  return (
    <ProfilePageUi>
      <DefaultNavbar></DefaultNavbar>
      <Profile></Profile>
    </ProfilePageUi>
  );
}
