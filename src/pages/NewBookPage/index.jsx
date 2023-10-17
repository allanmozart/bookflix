import { Page } from './style';
import NewBook from '../../components/NewBook';
import DefaultNavbar from '../../components/DefaultNavbar';
import { RequireAuth } from '../../components/RequireAuth/RequireAuth';

export default function NewBookPage() {
  return (
    <Page>
      <RequireAuth />
      <DefaultNavbar />
      <NewBook></NewBook>
    </Page>
  );
}
