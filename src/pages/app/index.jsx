import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppUi, EmailContainer, LadingPage, Paragraph, Title } from './style';
import { MainHeader } from '../../components/MainHeader';
import { DefaultButton } from '../../components/Buttons/style';
import { EmailInput } from '../../components/Input';
import LoginPage from '../LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

function Home() {
  return (
    <AppUi>
      <MainHeader>
        <img
          className="logo"
          src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
          alt="Bookflix Logo"
        />
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
          <EmailInput type="email" placeholder="Type your e-mail"></EmailInput>
          <DefaultButton heightSize={'55px'} fontSize={'35px'} to="/register">
            Subscribe
          </DefaultButton>
        </EmailContainer>
      </LadingPage>
    </AppUi>
  );
}
