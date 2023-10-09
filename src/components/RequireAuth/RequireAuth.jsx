import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../../requests/auth/login';
import { useEffect } from 'react';

export const RequireAuth = () => {
  const navigate = useNavigate();
  const token = getAuthToken();
  console.log(token);

  useEffect(() => {
    if (token === null) {
      navigate('/login');
    }
  }, [token, navigate]);

  return null;
};
