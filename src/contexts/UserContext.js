import React, { createContext, useState } from "react";

const UserContext = createContext({});

const { Provider } = UserContext;

const UserContextProvider = ({ children }) => {
  const [data, setData] = useState(
    [] && (JSON.parse(localStorage.getItem("users")) || [])
  );
  const [repo, setRepo] = useState(
    [] && (JSON.parse(localStorage.getItem("repo")) || [])
  );

  const [user, setUser] = useState("");

  return (
    <>
      <Provider value={{ data, setData, user, setUser, repo, setRepo }}>
        {children}
      </Provider>
    </>
  );
};

export { UserContext, UserContextProvider };
