import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "./styles/Global";

import { UserContextProvider } from "./contexts/UserContext";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <UserContextProvider>
          <GlobalStyle />
          <Route path="/" exact component={Login} />
          <Route path="/profile" component={Profile} />
        </UserContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
