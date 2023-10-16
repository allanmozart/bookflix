import { Page, Paragraph } from "./style";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import Catalog from "../../components/Catalog";
import { useUser } from "../../components/UserContext/User";
import { Logout } from "../../components/Logout";
import { Navbar, NavbarContainer, LinkNavbar } from "../../components/Navbar";


export default function CatalogPage() {
  const { userData } = useUser();
  return (
    <>
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

      <Page>
        <Catalog />
      </Page>
    </>
  );
}
