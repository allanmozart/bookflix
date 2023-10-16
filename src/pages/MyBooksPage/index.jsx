import { Link } from "react-router-dom";
import MyBooks from "../../components/MyBooks";
import { RequireAuth } from "../../components/RequireAuth/RequireAuth";
import { Page, Paragraph } from "./style";
import { Logo } from "../../components/Logo";
import { Logout } from "../../components/Logout";
import { Navbar, NavbarContainer, LinkNavbar } from "../../components/Navbar";
import { useUser } from "../../components/UserContext/User";


export default function MyBooksPage() {
  const { userData } = useUser();
  
  return (
    <Page>
      <RequireAuth />
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

      <MyBooks></MyBooks>
    </Page>
  );
}
