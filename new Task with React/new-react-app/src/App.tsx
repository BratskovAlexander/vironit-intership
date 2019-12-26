import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Profile from "./pages/Profile/Profile";
import Authorization from "./pages/Authorization/Authorization";
import PrivateRouter from "./component/PrivateRouter/PrivateRouter";
import service from "./service/service";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      token: ""
    };
  }

  componentDidMount = async () => {
    try {
      // if (localStorage.getItem("refresh-token") !== null) {
      //   console.log("Зашел в условие, значит рефреш токен есть");
      //   if (sessionStorage.getItem("access-token") === null) {
      //     console.log(
      //       "нахожусь в условии, значит есть рефреш токен, но нет аксесс токена"
      //     );
      //     const getTokens = await service.getTokens(
      //       localStorage.getItem("refresh-token")
      //     );
      //     console.log("сходил за новыми токенами и сейчаас их добавлю");
      //     sessionStorage.setItem("access-token", getTokens.access_token);
      //     localStorage.setItem("refresh-token", getTokens.refresh_token);
      //   } else {
      //     console.log(
      //       "зашел в условие, значит есть аксесс токен и сейчас зайду в интервал"
      //     );
      //     setInterval(async () => {
      //       console.log(
      //         "зашел в сетИнтервал и буду сейчас делать постоянный запрос на бэк"
      //       );
      //       if (localStorage.getItem("refresh-token")) {
      //         console.log("зашел в интервал и в условие");
      //         const getTokens = await service.getTokens(
      //           sessionStorage.getItem("access-token")
      //         );
      //         sessionStorage.setItem("access-token", getTokens.access_token);
      //         localStorage.setItem("refresh-token", getTokens.refresh_token);
      //       }
      //     }, 8000);
      //   }
        console.log("ничего не должен запрашивать, нет никаких токенов");
      // }

    //   if (localStorage.getItem("refresh-token")) {
    //       if(sessionStorage.getItem("access-token")) {
    //     setInterval(async () => {
    //         await service.getTokens(
    //           sessionStorage.getItem("access-token")
    //         );
    //       return console.log("finita lya comedia");
    //       }, 8000);
    //     }
    //   }
    //   this.props.history.push("/login");
    } catch (error) {
      console.log(
        "ошибка в АппДжС, значит не получил токен с бэка "
      );
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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
