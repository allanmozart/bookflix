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

function DefaultNavbar() {
  const { userData } = useUser();
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

        <LinkNavbar to="/mybooks">My Books</LinkNavbar>

        <LinkNavbar to="/newbook">Insert New book</LinkNavbar>
      </NavbarContainer>
      <ProfileDisplay>
        <NameDisplay>{getFirstName(userData.name)}</NameDisplay>
        <Logout />
      </ProfileDisplay>
    </Navbar>
  );
}

export default DefaultNavbar;
