import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "./styles/Global";

import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <GlobalStyle />
          <Route path="/" exact component={Login} />
        </>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
