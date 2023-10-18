import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../../api/auth/login';
import { useEffect } from 'react';

export const RequireAuth = () => {
  const navigate = useNavigate();
  const token = getAuthToken();
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return null;
};
