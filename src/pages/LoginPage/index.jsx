import { MainHeader } from '../../components/MainHeader';
import Login from '../../components/Login';
import { Page } from './style';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/logo';

export default function LoginPage() {
  return (
    <>
      <MainHeader>
        <Link to="/">
          <Logo
            src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
            alt="Bookflix Logo"
          ></Logo>
        </Link>
      </MainHeader>
      <Page>
        <Login></Login>
      </Page>
    </>
  );
}
