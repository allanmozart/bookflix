import { Logo } from "../../components/Logo";
import { Link } from "react-router-dom";
import { Page, Paragraph } from "./style";
import NewBook from "../../components/NewBook";
import { Logout } from "../../components/Logout";
import { Navbar, NavbarContainer, LinkNavbar } from "../../components/Navbar";
import { useUser } from "../../components/UserContext/User";

export default function NewBookPage() {
  const { userData } = useUser();
  return (
    <Page>
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
          <Paragraph>{userData.name}</Paragraph>
          <Logout />
        </NavbarContainer>
      </Navbar>
      <NewBook></NewBook>
    </Page>
  );
}
