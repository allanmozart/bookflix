import { Register } from '../../components/Register';
import { LogoHuge } from '../../components/Logo';
import { Page } from './style';

export default function RegisterPage() {
  return (
    <>
      <Page>
        <Register></Register>
        <LogoHuge src="../assets/icons8-netflix-480.svg"></LogoHuge>
      </Page>
    </>
  );
}
