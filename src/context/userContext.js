import React, { createContext, useState } from 'react';
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [ user, setUser] = useState(false);

  const authenticate = (result) => {
    setUser(result)
  };
  const unAuthenticate = () => {
    setUser(null)
  }
  
  return (
    <UserContext.Provider value={{ user, authenticate, unAuthenticate }}>
      {props.children}
    </UserContext.Provider>
  );
}
 
export default UserContextProvider;