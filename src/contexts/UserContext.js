import React, { createContext, useState } from "react";

const UserContext = createContext({});

const { Provider } = UserContext;

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    undefined || JSON.parse(localStorage.getItem("user"))
  );

  return (
    <>
      <Provider value={{ user, setUser }}>{children}</Provider>
    </>
  );
};

export { UserContext, UserContextProvider };
