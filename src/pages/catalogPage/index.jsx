import { MainHeader } from '../../components/MainHeader';
import { Page } from './style';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import { Paragraph } from './style';
import { RequireAuth } from '../../components/RequireAuth/RequireAuth';

export default function CatalogPage() {
  return (
    <>
      <RequireAuth /> {RequireAuth}
      <MainHeader>
        <Link to="/catalog">
          <Logo
            src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
            alt="Bookflix Logo"
          ></Logo>
        </Link>
      </MainHeader>
      <Page>
        <Paragraph>Catalog</Paragraph>
      </Page>
    </>
  );
}
