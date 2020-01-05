import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../../component/Header/Header";
import { connect } from "react-redux";
import service from "../../service/service";

class Home extends React.Component<any, any> {
  getUser = async () => {
    const getAuthorizationUser: any = await service.getAuthorizationUser();
    return getAuthorizationUser;
  };

  render() {
    console.log(this.getUser);

    const { user } = this.props.user;
    const { city } = this.props.city;

    return sessionStorage.getItem("access-token") ? (
      <>
        <Header path={["/profile"]} items={["Профиль"]} visible={true} />
        <p>
          Привет {user.name} {user.surname} {}
        </p>
        <p>Ты из {city}?</p>
      </>
    ) : (
      <>
        <Header
          path={["/registration", "/login"]}
          items={["Регистрация", "Войти"]}
        />
        <p>
          Привет {user.name} {user.surname}
        </p>
        <p>Ты из {city}?</p>
      </>
    );
  }
}

const mapStateToProps = (store: any) => {
  console.log(store);
  return {
    user: store.user,
    city: store.city
  };
};

export default connect(mapStateToProps)(withRouter(Home));
