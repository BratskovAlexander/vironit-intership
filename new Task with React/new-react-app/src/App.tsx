import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Authorization from "./pages/Authorization/Authorization";
import PrivateRouter from "./component/PrivateRouter/PrivateRouter";
import Messages from "./component/Messages/Messages";
import Friends from "./component/Friends/Friends";
import UserProfile from "./component/UserProfile/UserProfile";
import SettingsUser from "./component/SettingsUser/SettingsUser";
import { connect } from "react-redux";
import { getUser } from "./actions/userAction";
import Louder from "./component/Louder/Louder";
import { getNewTokens } from "./actions/getTokensActions";
import { store } from "./store/configureStore";

let interval: NodeJS.Timeout;

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      louder: true
    };
  }

  componentDidMount = () => {
    if (localStorage.getItem("refresh-token")) {
      if (sessionStorage.getItem("access-token")) {
        this.props.getUser();
        store.subscribe(() => {
          if (store.getState().userData.user !== this.props.user) {
            this.setState({
              louder: false
            });
          }
        });

        this.setState({ louder: false });
        this.props.getTokens();
        interval = setInterval(() => {
          this.props.getTokens();
        }, 590000);
      } else {
        this.props.getTokens();
        this.props.getUser();
        this.setState({ louder: false });
        interval = setInterval(() => {
          this.props.getTokens();
        }, 590000);
      }
    } else {
      this.setState({ louder: false });
      clearInterval(interval);
    }
  };

  render() {
    return this.state.louder ? (
      <Louder />
    ) : (
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
            component={Friends}
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

const mapStateToProps = (store: any) => {
  return {
    user: store.userData.user
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: () => dispatch(getUser()),
    getTokens: () => dispatch(getNewTokens())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
