import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../../component/Header/Header";
import Sidebar from "../../component/Sidebar/Sidebar";

class Home extends React.Component<any, any> {
  render() {
    return sessionStorage.getItem("access-token") ? (
      <>
      <Header visible={true} />
      <Sidebar />
      </>
    ) : (
      <Header
        path={["/registration", "/login"]}
        items={["Регистрация", "Войти"]}
      />
    );
  }
}

export default withRouter(Home);
