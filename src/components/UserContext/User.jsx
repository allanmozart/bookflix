import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    id: 1,
    name: null,
    email: 'john@example.com',
    profile_picture: 'url',
  });

  console.log(userData);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
