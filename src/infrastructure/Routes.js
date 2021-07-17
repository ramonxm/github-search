import { Route, useLocation, Switch } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { NotFound } from "../components/NotFound";

const Routes = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: "translate(100%,0)",
    },
    enter: {
      opacity: 1,
      transform: "translate(0%,0)",
    },
    leave: {
      opacity: 0,
      transform: "translate(-50%,0)",
    },
  });
  return transitions((props, items) => (
    <animated.div style={props}>
      <Switch location={items}>
        <Route path="/" exact component={Login} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </animated.div>
  ));
};

export { Routes };
