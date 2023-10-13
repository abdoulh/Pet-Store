import React, { useState, useEffect ,createContext } from 'react';
import {getUserId} from '../services/api.service'

export const UserContext =createContext();

const PostProvider  = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);

  async function getRole() {
    const Response = await getUserId();
    setUser(Response);
  }

  useEffect(() => {
    getRole();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default PostProvider ;