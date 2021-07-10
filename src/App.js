import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "./styles/Global";

import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <GlobalStyle />
          <Route path="/" exact component={Login} />
          <Route path="/profile" component={Profile} />
        </>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
