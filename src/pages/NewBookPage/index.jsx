import { Page } from './style';
import NewBook from '../../components/NewBook';
import DefaultNavbar from '../../components/DefaultNavbar';

export default function NewBookPage() {
  return (
    <Page>
      <DefaultNavbar />
      <NewBook></NewBook>
    </Page>
  );
}
