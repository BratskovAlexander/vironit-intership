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
     const getTokens = await service.getTokens(sessionStorage.getItem("access-token"));
      console.log(getTokens);
    } catch (error) {
      console.log(error);
    }

    // if (sessionStorage.getItem("access-token")) {
    //   console.log(sessionStorage.getItem("access-token"));
    //   const getTokens = await service.getTokens(
    //     sessionStorage.getItem("access-token")
    //   );
    //   this.setState({
    //     token: getTokens
    //   });
    //   console.log(this.state.token.access_token);
    // }
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
