import { Page } from './style';

import Catalog from '../../components/Catalog';
import DefaultNavbar from '../../components/DefaultNavbar';

export default function CatalogPage() {
  return (
    <>
      <DefaultNavbar />
      <Page>
        <Catalog />
      </Page>
    </>
  );
}
