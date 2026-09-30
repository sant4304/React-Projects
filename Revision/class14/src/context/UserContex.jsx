import React from "react";
import { createContext } from "react";

export const UserDataContext = createContext();
const UserContex = ({ children }) => {
    const user ="Sam"
  return (
    <div>
      <UserDataContext.Provider value={user}>
        {children}
        </UserDataContext.Provider>
    </div>
  );
};

export default UserContex;
