import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Profile from "./pages/Profile/Profile";
import Authorization from "./pages/Authorization/Authorization";
import PrivateRouter from "./component/PrivateRouter/PrivateRouter";
import service from "./service/service";
// import Sidebar from "./component/ProfileSidebar/Sidebar";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      token: ""
    };
  }

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

  // componentWillUnmount = async () => {
  //   try {
  //     if (localStorage.getItem("refresh-token")) {
  //       console.log("hello");
  //     }
  //   } catch (error) {
  //     console.log("oshibo4ka");
  //   }
  // };

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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
