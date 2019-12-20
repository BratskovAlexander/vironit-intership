import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import ErrorRegistration from "./pages/ErrorRegistration/ErrorRegistration";
import Profile from "./pages/Profile/Profile";
import Authorization from "./pages/Authorization/Authorization";
import PrivateRouter from "./component/PrivateRouter/PrivateRouter";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={Authorization} />
        <Route exact path="/error-registration" component={ErrorRegistration} />
        <PrivateRouter exact path="/profile" component={Profile} redirect='/registration' />       
      </Switch>
    </BrowserRouter>
  );
};

export default App;
