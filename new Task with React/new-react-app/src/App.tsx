import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import ErrorRegistration from "./pages/ErrorRegistration/ErrorRegistration";
import Profile from "./pages/Profile/Profile";
import User from "./components/User/User";
import Authorization from "./pages/Authorization/Authorization";
import modalPageUpdate from "./modalPageUpdate";
import modalPageDelete from "./modalPageDelete";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={Authorization} />
        <Route exact path="/user" component={User} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/error-registration" component={ErrorRegistration} />
        <Route exact path="/modal-page-update" component={modalPageUpdate} />
        <Route exact path="/modal-page-delete" component={modalPageDelete} />
        
      </Switch>
    </BrowserRouter>
  );
};

export default App;
