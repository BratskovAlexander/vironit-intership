import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Authorization from "./pages/Authorization/Authorization";
import PrivateRouter from "./component/PrivateRouter/PrivateRouter";
import Messages from "./component/Messages/Messages";
import AdminPage from "./component/Admin/AdminPage";
import UserProfile from "./component/UserProfile/UserProfile";
import SettingsUser from "./component/SettingsUser/SettingsUser";
import { connect } from "react-redux";

class App extends React.Component<any, any> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Authorization} />
          <PrivateRouter
            exact
            path="/profile"
            component={UserProfile}
            redirect="/login"
          />
          <PrivateRouter
            exact
            path="/friends"
            component={AdminPage}
            redirect="/login"
          />
          <PrivateRouter
            exact
            path="/settings"
            component={SettingsUser}
            redirect="/login"
          />
          <PrivateRouter
            exact
            path="/messages"
            component={Messages}
            redirect="/login"
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
