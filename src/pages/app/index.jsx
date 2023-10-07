import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from '../LoginPage';
import { LandingPage } from '../LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" />
        <Route path="/catalog" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
