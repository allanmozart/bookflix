import { Profile } from '../../components/Profile';
import DefaultNavbar from '../../components/DefaultNavbar';
import { ProfilePageUi } from './style';
import { RequireAuth } from '../../components/RequireAuth/RequireAuth';
export default function ProfilePage() {
  return (
    <ProfilePageUi>
      <RequireAuth />
      <DefaultNavbar></DefaultNavbar>
      <Profile></Profile>
    </ProfilePageUi>
  );
}
