import { useNavigate } from 'react-router-dom';
import { removeLoginCredentials } from '../../api/auth/login';
import { LogoutButton } from '../Buttons/style';
import { useUser } from '../UserContext/User';

export function Logout() {
  const navigate = useNavigate();
  const { clearUserData } = useUser();
  const HandleLogout = () => {
    clearUserData();
    removeLoginCredentials();
    navigate('/login');
  };

  return <LogoutButton onClick={HandleLogout}>Logout</LogoutButton>;
}
