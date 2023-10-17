import { Link } from 'react-router-dom';
import {
  LinkNavbar,
  NameDisplay,
  Navbar,
  NavbarContainer,
  ProfileDisplay,
} from './style';
import { Logo } from '../Logo';
import { getFirstName } from '../../utils/firstName';
import { Logout } from '../Logout';
import { useUser } from '../UserContext/User';
import { useNavigate } from 'react-router-dom';

function DefaultNavbar() {
  const { userData } = useUser();
  const navigate = useNavigate();

  const HandleProfile = () => {
    navigate('/profile');
  };
  return (
    <Navbar>
      <Link to="/">
        <Logo
          src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
          alt="Bookflix Logo"
        ></Logo>
      </Link>
      <NavbarContainer>
        <LinkNavbar to="/catalog">Catalog</LinkNavbar>

        <LinkNavbar to="/mybooks">My books</LinkNavbar>

        <LinkNavbar to="/newbook">New book</LinkNavbar>
      </NavbarContainer>
      <ProfileDisplay>
        <NameDisplay onClick={HandleProfile}>
          {getFirstName(userData.name)}
        </NameDisplay>
        <Logout />
      </ProfileDisplay>
    </Navbar>
  );
}

export default DefaultNavbar;
