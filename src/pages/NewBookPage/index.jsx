import { Logo } from '../../components/Logo';
import { MainHeader } from '../../components/MainHeader';
import { Link } from 'react-router-dom';
import { Page } from './style';
import NewBook from '../../components/NewBook';

export default function NewBookPage() {
  return (
    <Page>
      <MainHeader>
        <Link to="/">
          <Logo
            src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
            alt="Bookflix Logo"
          ></Logo>
        </Link>
      </MainHeader>
      <NewBook></NewBook>
    </Page>
  );
}
