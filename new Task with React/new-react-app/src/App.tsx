import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import ErrorRegistration from "./pages/ErrorRegistration/ErrorRegistration";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import User from "./components/User/User";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user" component={User} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/error-registration" component={ErrorRegistration} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
