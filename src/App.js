import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/Global";

import { UserContextProvider } from "./contexts/UserContext";

import { Routes } from "./infrastructure/Routes";
const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <GlobalStyle />
        <Routes />
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
