import { Logo } from '../../components/Logo';
import { MainHeader } from '../../components/MainHeader';
import Register from '../../components/Register';
import { Page } from './style';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <>
      <MainHeader>
        <Link to="/register">
          <Logo
            src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
            alt="Bookflix Logo">
          </Logo>
        </Link>
      </MainHeader>
      <Page>
      <Register></Register>
      </Page>
    </>
  );
}