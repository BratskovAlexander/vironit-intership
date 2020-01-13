import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Profile from "./pages/Profile/Profile";
import Authorization from "./pages/Authorization/Authorization";
import PrivateRouter from "./component/PrivateRouter/PrivateRouter";
import service from "./service/service";
import Messages from "./component/Messages/Messages";
import AdminPage from "./component/Admin/AdminPage";
import UserProfile from "./component/UserProfile/UserProfile";
import SettingsUser from "./component/SettingsUser/SettingsUser";

class App extends React.Component<any, any> {
  componentDidMount = async () => {
    if (localStorage.getItem("refresh-token")) {
      const getTokens = await service.getTokens(
        localStorage.getItem("refresh-token")
      );
      sessionStorage.setItem("access-token", getTokens.access_token);
      if (sessionStorage.getItem("access-token")) {
        try {
          const getTokens = await service.getTokens(
            sessionStorage.getItem("access-token")
          );
          sessionStorage.setItem("access-token", getTokens.access_token);
          setInterval(async () => {
            const getTokens = await service.getTokens(
              sessionStorage.getItem("access-token")
            );
            sessionStorage.setItem("access-token", getTokens.access_token);
          }, 5000);
        } catch (error) {
          console.log("ololo");
          const getTokens = await service.getTokens(
            localStorage.getItem("refresh-token")
          );
          sessionStorage.setItem("access-token", getTokens.access_token);
          setInterval(async () => {
            const getTokens = await service.getTokens(
              sessionStorage.getItem("access-token")
            );
            sessionStorage.setItem("access-token", getTokens.access_token);
          }, 5000);
        }
      } else {
        const getTokens = await service.getTokens(
          localStorage.getItem("refresh-token")
        );
        sessionStorage.setItem("access-token", getTokens.access_token);
        setInterval(async () => {
          const getTokens = await service.getTokens(
            sessionStorage.getItem("access-token")
          );
          sessionStorage.setItem("access-token", getTokens.access_token);
        }, 5000);
      }
    }
  };
  
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
            component={Profile}
            redirect="/login"
          />
          <PrivateRouter
            exact
            path="/user-profile"
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

export default App;
