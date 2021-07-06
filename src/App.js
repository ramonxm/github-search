import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./infrastructure/Routes";
import GlobalStyle from "./styles/Global";

const App = () => {
  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  );
};

export default App;
