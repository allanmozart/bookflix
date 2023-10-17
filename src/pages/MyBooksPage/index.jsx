import MyBooks from '../../components/MyBooks';
import DefaultNavbar from '../../components/DefaultNavbar';
import { RequireAuth } from '../../components/RequireAuth/RequireAuth';
import { Page } from './style';

export default function MyBooksPage() {
  return (
    <Page>
      <RequireAuth />
      <DefaultNavbar></DefaultNavbar>

      <MyBooks></MyBooks>
    </Page>
  );
}
