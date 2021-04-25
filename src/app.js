import React from "react";
import Sidenav from "./component/SideNav";
import Quill from "./component/Quill";
import "./app.css";
import AllNotes from "./component/AllNotes";
import { AuthProvider } from "./context/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/login";
const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/">
              <div className="app">
                <div className="sidenav-app">
                  <Sidenav />
                </div>
                <div className="all-notes">
                  <AllNotes />
                </div>
                <div className="quill-app">
                  <Quill />
                </div>
              </div>
            </Route>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
};
export default App;
