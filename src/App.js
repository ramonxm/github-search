import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./infrastructure/Routes";

const App = () => {
  return (
    <Router>
      <Routes></Routes>
    </Router>
  );
};

export default App;
