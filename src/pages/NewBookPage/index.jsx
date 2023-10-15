import { Logo } from "../../components/Logo";
import { MainHeader } from "../../components/MainHeader";
import { Link } from "react-router-dom";
import { Page } from "./style";
import NewBook from "../../components/NewBook";
import { DefaultButton } from "../../components/Buttons/style";
import { Navbar, NavbarContainer, LinkNavbar } from "../../components/Navbar";

export default function NewBookPage() {
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
          <LinkNavbar href="/catalog">Catalog</LinkNavbar>

          <LinkNavbar href="/mybooks">My Books</LinkNavbar>

          <LinkNavbar href="/newbook">Insert New book</LinkNavbar>

          <DefaultButton style={{ margin: "3px 10px" }} to="/login">
            Logout
          </DefaultButton>
        </NavbarContainer>
      </Navbar>
      <NewBook></NewBook>
    </Page>
  );
}
