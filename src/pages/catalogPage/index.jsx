import { MainHeader } from '../../components/MainHeader';
import { Page } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../components/logo';
import { Paragraph } from './style';

const RequireAuth = () => {
  const navitgate = useNavigate();
  if (this.user !== null) {
    navitgate('/');
  }
};

export default function CatalogPage() {
  RequireAuth;

  return (
    <>
      <MainHeader>
        <Link to="/catalog">
          <Logo
            src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
            alt="Bookflix Logo"
          ></Logo>
        </Link>
      </MainHeader>
      <Page>
        <Paragraph>CATALOG</Paragraph>
      </Page>
    </>
  );
}
