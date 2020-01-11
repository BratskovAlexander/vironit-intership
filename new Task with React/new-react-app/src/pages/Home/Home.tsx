import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../../component/Header/Header";

class Home extends React.Component<any, any> {
  render() {
    return sessionStorage.getItem("access-token") ? (
      <Header visible={true} />
    ) : (
      <Header
        path={["/registration", "/login"]}
        items={["Регистрация", "Войти"]}
      />
    );
  }
}

export default withRouter(Home);
