import { MainHeader } from '../../components/MainHeader';
import { Page, Paragraph } from './style';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import Catalog from '../../components/Catalog';
import { DefaultButton } from '../../components/Buttons/style';
import { useUser } from '../../components/UserContext/User';

export default function CatalogPage() {
  const { userData } = useUser();

  return (
    <>
      <MainHeader>
        <Link to="/">
          <Logo
            src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
            alt="Bookflix Logo"
          ></Logo>
        </Link>
        <DefaultButton style={{ margin: '10px' }} to="/newbook">
          Insert New book
        </DefaultButton>
        <DefaultButton style={{ margin: '10px' }} to="/mybooks">
          My Books
        </DefaultButton>
        <DefaultButton style={{ margin: '10px' }} to="/login">
          Logout
        </DefaultButton>
        <Paragraph>{userData.name}</Paragraph>
      </MainHeader>

      <Page>
        <Catalog />
      </Page>
    </>
  );
}
