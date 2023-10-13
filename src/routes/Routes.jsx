import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from '../pages/LoginPage';
import { LandingPage } from '../pages/LandingPage';
import CatalogPage from '../pages/catalogPage';
import RegisterPage from '../pages/RegisterPage';
import NewBookPage from '../pages/NewBookPage';

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/newbook" element={<NewBookPage />} />
      </Routes>
    </BrowserRouter>
  );
};
