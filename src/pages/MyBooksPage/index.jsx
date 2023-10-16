import { Link } from 'react-router-dom';
import { MainHeader } from '../../components/MainHeader';
import MyBooks from '../../components/MyBooks';
import { RequireAuth } from '../../components/RequireAuth/RequireAuth';
import { Page, Paragraph } from './style';
import { Logo } from '../../components/Logo';
import { DefaultButton } from '../../components/Buttons/style';
import { Logout } from '../../components/Logout';
import { useUser } from '../../components/UserContext/User';

export default function MyBooksPage() {
  const { userData } = useUser();

  return (
    <Page>
      <RequireAuth />
      <MainHeader>
        <Link to="/">
          <Logo
            src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
            alt="Bookflix Logo"
          ></Logo>
        </Link>
        <DefaultButton style={{ margin: '10px' }} to="/catalog">
          Catalog
        </DefaultButton>
        <DefaultButton style={{ margin: '10px' }} to="/newbook">
          Insert New book
        </DefaultButton>
        <DefaultButton style={{ margin: '10px' }} to="/mybooks">
          My Books
        </DefaultButton>
        <Logout></Logout>
      </MainHeader>
      <Paragraph>{userData.name}</Paragraph>
      <MyBooks></MyBooks>
    </Page>
  );
}
