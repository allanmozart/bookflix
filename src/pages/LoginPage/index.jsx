import Login from '../../components/Login';
import { Page } from './style';
import { MainHeader } from '../../components/MainHeader';
import { DefaultButton } from '../../components/Buttons/style';

export default function LoginPage() {
  return (
    <Page>
      <MainHeader>
        <img
          className="logo"
          src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
          alt="Bookflix Logo"
        />
        <DefaultButton style={{ margin: '10px' }} to="/">
          Home
        </DefaultButton>
      </MainHeader>
      <Login></Login>
    </Page>
  );
}
