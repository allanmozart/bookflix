import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import { LandingPage } from '../pages/LandingPage';
import CatalogPage from '../pages/CatalogPage';
import RegisterPage from '../pages/RegisterPage';
import NewBookPage from '../pages/NewBookPage';
import MyBooksPage from '../pages/MyBooksPage';
import { UserProvider } from '../components/UserContext/User';
import { ErrorPage } from '../pages/Error';

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/newbook" element={<NewBookPage />} />
          <Route path="/mybooks" element={<MyBooksPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};
