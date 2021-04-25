import React from "react";

import { AuthProvider } from "./context/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/login";
import PrivateRoute from "./component/PrivateRoute";
import App1 from "./app1";

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/signup" component={Signup}></Route>
            <PrivateRoute component={App1} exact path="/"></PrivateRoute>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
};
export default App;
