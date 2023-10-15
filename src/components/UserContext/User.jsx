import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    id: null,
    name: null,
    email: null,
    profile_picture: null,
  });

  const clearUserData = () => {
    setUserData({
      id: null,
      name: null,
      email: null,
      profile_picture: null,
    });
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, clearUserData }}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
