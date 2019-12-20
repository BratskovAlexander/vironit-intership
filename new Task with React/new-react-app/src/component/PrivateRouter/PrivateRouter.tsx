import React from "react";
import { Route, Redirect } from "react-router-dom";

const accessToken: any = sessionStorage.getItem("access-token");

class PrivateRouter extends React.Component<any, any> {
  isAccessToken = () => {
    if (accessToken) {
      return true;
    }
    return false;
  };
  render() {
    return this.isAccessToken() ? (
      <Route
        path={this.props.path}
        exact={this.props.exact}
        component={this.props.component}
      />
    ) : (
      <Redirect to={this.props.redirect} />
    );
  }
}

export default PrivateRouter;
