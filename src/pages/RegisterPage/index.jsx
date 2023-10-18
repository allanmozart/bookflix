import { Link } from 'react-router-dom';
import { MainHeader } from '../../components/MainHeader';
import { Register } from '../../components/Register';
import { Page } from './style';
import { Logo } from '../../components/Logo';
import { DefaultButton } from '../../components/buttons/style';

export default function RegisterPage() {
  return (
    <>
      <Page>
        <MainHeader>
          <Link to="/">
            <Logo
              src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
              alt="Bookflix Logo"
            ></Logo>
          </Link>
          <DefaultButton
            style={{ marginRight: '55px', padding: '5px 15px 5px 15px' }}
            to="/login"
          >
            Sign In
          </DefaultButton>
        </MainHeader>
        <Register></Register>
      </Page>
    </>
  );
}
