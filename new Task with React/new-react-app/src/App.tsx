import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
