import {
  LandingPageUi,
  EmailContainer,
  LadingPage,
  Paragraph,
  Title,
} from './style';
import { MainHeader } from '../../components/MainHeader';
import { DefaultButton } from '../../components/Buttons/style';
import { EmailInput } from '../../components/Input';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';

export function LandingPage() {
  return (
    <LandingPageUi>
      <MainHeader>
        <Link to="/">
          <Logo
            src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
            alt="Bookflix Logo"
          ></Logo>
        </Link>
        <DefaultButton style={{ margin: '10px' }} to="/login">
          Sign In
        </DefaultButton>
      </MainHeader>
      <LadingPage>
        <Title>Unlimited books, articles, and more</Title>
        <Paragraph>Read anywhere. Cancel anytime.</Paragraph>
        <Paragraph>
          Ready to read? Enter your email to create or restart your membership.
        </Paragraph>
        <EmailContainer>
          <EmailInput
            type="email"
            placeholder="Type your e-mail"
            id="emailInput"
          ></EmailInput>
          <DefaultButton height={'55px'} size={'25px'} to="/register">
            Subscribe
          </DefaultButton>
        </EmailContainer>
      </LadingPage>
    </LandingPageUi>
  );
}
