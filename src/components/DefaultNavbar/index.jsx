import { Link } from 'react-router-dom';
import { LinkNavbar, Navbar, NavbarContainer } from './style';
import { Logo } from '../Logo';
import { Paragraph } from '../Catalog/style';
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
        <Paragraph>{getFirstName(userData.name)}</Paragraph>
        <Logout />
      </NavbarContainer>
    </Navbar>
  );
}

export default DefaultNavbar;
