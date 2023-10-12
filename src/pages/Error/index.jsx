import { Paragraph, Title } from "./style";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { ErrorPageBg } from "./style";
import { MainHeader } from "../../components/MainHeader";
import { DefaultButton } from "../../components/Buttons/style";

export function ErrorPage() {
  return (
    <>
      <ErrorPageBg>
        <MainHeader>
          <Link to="/">
            <Logo
              src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
              alt="Bookflix Logo"
            ></Logo>
          </Link>
        </MainHeader>
        <Title>Upss! Something went wrong</Title>
        <Paragraph>
          Sorry, we could not find the page you were looking for.
          <DefaultButton style={{ margin: "10px" }} to="/login">
            Sign In
          </DefaultButton>
        </Paragraph>
      </ErrorPageBg>
    </>
  );
}
