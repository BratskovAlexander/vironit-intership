import React from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateRouter extends React.Component<any, any> {
  isAccessToken = () => {
    if (sessionStorage.getItem("access-token")) {
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
